import CareUnit from './CareUnit'
import { SubUnit } from './SubUnit'

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
  public subUnits: SubUnit[]
}
