import axios, { AxiosPromise } from 'axios'
import dotenv from 'dotenv'

import { IHttpService } from './IHttpService'

class AirtableService implements IHttpService {
  constructor() {
    dotenv.config()
    axios.defaults.baseURL = `${process.env.AIRTABLE_API_HOST}/${process.env.AIRTABLE_TABLE}`
    axios.defaults.timeout = 15000
    axios.defaults.headers = {
      Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
    }
  }

  public get(uri: string, params?: object): AxiosPromise<any> {
    return axios.get(uri, { params })
  }

  public post(uri: string, body: any) {
    return axios.post(uri, body)
  }

  public put(uri: string, body: any) {
    return axios.put(uri, body)
  }

  public patch(uri: string, body: any) {
    return axios.patch(uri, body)
  }

  public delete(uri: string) {
    return axios.delete(uri)
  }
}

export default new AirtableService()
