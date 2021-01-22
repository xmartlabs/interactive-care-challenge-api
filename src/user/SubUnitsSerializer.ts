import { Section, SubUnit } from '../models/SubUnit'
import ChecklistSerializer from './ChecklistSerializer'
import QuestionSerializer from './QuestionUnitSerializer'

export const SubUnitsSerializer = (subUnitData: any): SubUnit => {
  let name = subUnitData.Name
  let title = subUnitData.Title
  let unitType = subUnitData['Unit Type']
  let sections: Section[] = []
  let introParagraph
  let patientJourney
  let items: string[] = []
  let additionalInfo

  if (unitType === 'Learning') {
    const sectionsKeys = Object.keys(subUnitData).filter((keyValue) =>
      keyValue.toLowerCase().includes('Section'.toLowerCase()),
    )

    for (const sectionKey of sectionsKeys) {
      let sectionContent
      if (sectionKey.includes('Text')) {
        sectionContent = subUnitData[sectionKey]
      } else {
        sectionContent = subUnitData[sectionKey][0].url
      }
      sections.push({
        content: sectionContent,
        type: sectionKey.includes('Text') ? 'Text' : 'Media',
      })
    }
  }

  if (unitType === 'Questions') {
    patientJourney = QuestionSerializer({
      introParagraph: subUnitData['[QU] Intro paragraph'],
      items: subUnitData['[QU] Items'].split('\n'),
      title: subUnitData.Title,
      unitType: 'Questions',
    })
    title = patientJourney.title
    items = patientJourney.items
    introParagraph = patientJourney.introParagraph
  }

  if (unitType === 'Checklist') {
    patientJourney = ChecklistSerializer({
      additionalInfo: subUnitData['[CU] Additional Info'],
      introParagraph: subUnitData['[CU] Intro paragraph'],
      items: subUnitData['[CU] Items'].split('\n'),
      title: subUnitData.Title,
      unitType: 'Checklist',
    })

    title = patientJourney.title
    items = patientJourney.items
    introParagraph = patientJourney.introParagraph
    additionalInfo = patientJourney.additionalInfo
  }

  return {
    additionalInfo,
    introParagraph,
    items,
    name,
    sections,
    title,
    unitType,
  }
}
