import CareUnit from './CareUnit'

export default class Checklist extends CareUnit {
  public static fromJson({
    unitType,
    title,
    introParagraph,
    items,
    additionalInfo,
  }: any) {
    const checklist = new Checklist()
    checklist.unitType = unitType
    checklist.title = title
    checklist.introParagraph = introParagraph
    checklist.items = items
    checklist.additionalInfo = additionalInfo

    return checklist
  }

  public unitType: string
  public title: string
  public introParagraph: string
  public items: string[]
  public additionalInfo: string
}
