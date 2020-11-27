import Airtable from "airtable";

import Patient from "../models/Patient";
import CareUnit from "../models/CareUnit";
import Checklist from "../models/Checklist";
import Question from "../models/QuestionUnit";
import Learning from "../models/LearningUnit";
import UnitGroup from "../models/UnitGroup";

import PatientSerializer from "./PatientSerializer";
import ChecklistSerializer from "./ChecklistSerializer";
import QuestionSerializer from "./QuestionUnitSerializer";
import LearningSerializer from "./LearningUnitSerializer";
import UnitGroupSerializer from "./UnitGroupSerializer";

export class PatientRepository {
  public async findOne(id: string) {
    var patientJourneys: CareUnit[] = [];
    var base = new Airtable({apiKey: 'keyYrN3yQKoJaONxL'}).base('appe045srNuyKDshe');

    base("Patient").find('recrn0kd9rPwqn3mV', function(err, patient) {
      if (err) { console.error(err); return; }

      for (const iterator of patient.get('Journey Units')) {
        base('Care Unit').find(iterator, function(err, careUnit) {
          if (err) { console.error(err); return; }
          
          var fields = careUnit._rawJson.fields;

          if (fields["Unit Type"] == "Learning"){
            let patientJourney = LearningSerializer({
              unitType: "Learning",
              title: fields["Title"],
              section1Text: fields["[LU] Section 1 - Text"],
              section1Media: fields["[LU] Section 1 - Media"],
              section2Text: fields["[LU] Section 2 - Text"],
              section2Media: fields["[LU] Section 2 - Media"],
              section3Text: fields["[LU] Section 3 - Text"],
              section3Media: fields["[LU] Section 3 - Media"]
            });
            patientJourneys.push(patientJourney);
          };

          if (fields["Unit Type"] == "Unit Group"){
            let patientJourney = UnitGroupSerializer({
              unitType: "Unit Group",
              title: fields["Title"],
              introParagraph: fields["[UG] Intro paragraph"],
              subUnits: fields["[UG] Sub Units"]
            });
            patientJourneys.push(patientJourney);
          };

          if (fields["Unit Type"] == "Questions"){
            let patientJourney = QuestionSerializer({
              unitType: "Questions",
              title: fields["Title"],
              introParagraph: fields["[QU] Intro paragraph"],
              items: fields["[QU] Items"]
            });
            patientJourneys.push(patientJourney);
          };

          if (fields["Unit Type"] == "Checklist"){
            let patientJourney = ChecklistSerializer({
              unitType: "Checklist",
              title: fields["Title"],
              introParagraph: fields["[CU] Intro paragraph"],
              items: fields["[QU] Items"],
              additionalInfo: fields["[QU] Additional Info"]
            });
            patientJourneys.push(patientJourney);
          };
        });
      };
      console.log(patientJourneys); // está retornando vacío
      let finalPatient = PatientSerializer({
        name: patient.fields["Name"],
        id: patient.fields["Id"],
        journeys: patientJourneys,
      });
    });
  }
}

export default new PatientRepository();
