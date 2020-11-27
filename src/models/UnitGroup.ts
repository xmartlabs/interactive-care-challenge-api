import CareUnit from './CareUnit'

export default class UnitGroup extends CareUnit {
  public static fromJson({ unitType, title, introParagraph, subUnits }: any) {
    const unitGroup = new UnitGroup()
    unitGroup.unitType = unitType
    unitGroup.title = title
    unitGroup.introParagraph = introParagraph
    unitGroup.subUnits = subUnits

    return unitGroup
  }

  public unitType: string
  public title: string
  public introParagraph: string
  public subUnits: string
}
