import bodyParser from 'body-parser'
import express from 'express'

import patientRouter from '../../../user/PatientRouter'

const apiRouter = express.Router()

apiRouter.use(bodyParser.json())

apiRouter.use('/patients', patientRouter.router)

export default apiRouter
