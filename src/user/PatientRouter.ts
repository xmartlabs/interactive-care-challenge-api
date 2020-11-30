import express from 'express'

import { PatientRepository } from './PatientRepository'

export class PatientRouter {
  public router: express.Router
  private service: PatientRepository

  constructor(service: PatientRepository) {
    this.service = service
    this.router = express.Router()
    this.setupRoutes()
  }

  private setupRoutes() {
    this.router.get('/', async (req, res) => {
      const {
        query: { recordId },
      } = req
      const patient = await this.service.findOne(recordId as string)
      res.send({
        patient,
      })
    })
  }
}

export default new PatientRouter(new PatientRepository())
