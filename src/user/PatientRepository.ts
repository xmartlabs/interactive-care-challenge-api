import Patient from "../models/Patient";
import PatientSerializer from "./PatientSerializer";

export class PatientRepository {
  public async findOne(id: string) {
    // TODO: here should be the call to AIRTABLE.
    // TODO: you could use the serializer to transform everything
    let patient = PatientSerializer({ 
        email: "email@email.com", 
        lastName: "lastname", 
        firstName:"firstName",
        id: 12
      })
      // REQUEST inicial
      // PATIENT
      // LISTA de RECORDS MODULOS.
      // REQUEST
      // LISTA de UNITS
      // REQUEST
      // const patientData
      // modulesList = []
      // for (const iterator of patient.modules) {

      //   const moduleData = await (obtener data)
      //   unitList = []

      //   for (const iterator of moduleData) {
      //     const unitData = await (obtener unit)
      //     unitList.push(unitData)
      //   }
      //   moduleData.units = unitsList
      //   moduleList.push(moduleData)
      // }
      // patientData.modules = modulesList


      // Armar un uno y mandar.
    return patient
  }
}

export default new PatientRepository();
