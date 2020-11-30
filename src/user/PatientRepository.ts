import CareUnit from '../models/CareUnit'
import AirtableService from '../services/AirtableService'
import ChecklistSerializer from './ChecklistSerializer'
import LearningSerializer from './LearningUnitSerializer'
import NavigatorSerializer from './NavigatorSerializer'
import PatientSerializer from './PatientSerializer'
import QuestionSerializer from './QuestionUnitSerializer'
import { SubUnitsSerializer } from './subUnitsSerializer'
import UnitGroupSerializer from './UnitGroupSerializer'

export class PatientRepository {
  public async findOne(id: string) {
    try {
      let patientJourneys: CareUnit[] = []
      const patientUri = `/Patient/${id}`

      const patientsResponse = await AirtableService.get(patientUri)

      const navigatorId = patientsResponse.data?.fields['Navigator'] ?? []
      const navigatorUri = `/Navigator/${navigatorId}`
      const navigatorResponse = await AirtableService.get(navigatorUri)
      const navigatorFields = navigatorResponse.data?.fields

      let patientNavigator = NavigatorSerializer({
        description: navigatorFields.Description,
        name: navigatorFields.Name,
        urlPhoto: navigatorFields.Photo[0].url,
      })

      const journeyUnitsIds =
        patientsResponse.data?.fields['Journey Units'] ?? []

      for (const journeyUnitRecordId of journeyUnitsIds) {
        const journeyUnitResponse = await AirtableService.get(
          `/Care%20Unit/${journeyUnitRecordId}`,
        )
        const careUnitFields = journeyUnitResponse.data?.fields ?? undefined
        let patientJourney

        if (careUnitFields) {
          if (careUnitFields['Unit Type'] === 'Learning') {
            patientJourney = LearningSerializer({
              section1Media: careUnitFields['[LU] Section 1 - Media'],
              section1Text: careUnitFields['[LU] Section 1 - Text'],
              section2Media: careUnitFields['[LU] Section 2 - Media'],
              section2Text: careUnitFields['[LU] Section 2 - Text'],
              section3Media: careUnitFields['[LU] Section 3 - Media'],
              section3Text: careUnitFields['[LU] Section 3 - Text'],
              title: careUnitFields.Title,
              unitType: 'Learning',
            })
          }

          if (careUnitFields['Unit Type'] === 'Unit Group') {
            const subUnits = careUnitFields['[UG] Sub Units'] ?? []
            let parsedSubunits = []
            for (const subUnit of subUnits) {
              const subUnitResponse = await AirtableService.get(
                `/Care%20Unit/${subUnit}`,
              )
              const serializedSubunit = SubUnitsSerializer(
                subUnitResponse.data.fields,
              )
              parsedSubunits.push(serializedSubunit)
            }
            patientJourney = UnitGroupSerializer({
              introParagraph: careUnitFields['[UG] Intro paragraph'],
              subUnits: parsedSubunits,
              title: careUnitFields.Title,
              unitType: 'Unit Group',
            })
          }

          if (careUnitFields['Unit Type'] === 'Questions') {
            patientJourney = QuestionSerializer({
              introParagraph: careUnitFields['[QU] Intro paragraph'],
              items: careUnitFields['[QU] Items'],
              title: careUnitFields.Title,
              unitType: 'Questions',
            })
          }

          if (careUnitFields['Unit Type'] === 'Checklist') {
            patientJourney = ChecklistSerializer({
              additionalInfo: careUnitFields['[QU] Additional Info'],
              introParagraph: careUnitFields['[CU] Intro paragraph'],
              items: careUnitFields['[QU] Items'],
              title: careUnitFields.Title,
              unitType: 'Checklist',
            })
          }
          patientJourneys.push(patientJourney)
        }
      }

      const patient = PatientSerializer({
        id: patientsResponse.data?.fields.Id ?? 'Test id',
        journeys: patientJourneys,
        name: patientsResponse.data?.fields.Name ?? 'Test name',
        navigator: patientNavigator,
      })

      return patient
    } catch (error) {
      return {
        name: 'error',
      }
    }
  }
}

export default new PatientRepository()
