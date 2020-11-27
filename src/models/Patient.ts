import CareUnit from './CareUnit'

export default class Patient {
  public static fromJson({ name, id, journeys }: any) {
    const user = new Patient()
    user.name = name
    user.id = id
    user.journeys = journeys
    return user
  }

  public id: number
  public name: string
  public journeys: CareUnit[]
}
