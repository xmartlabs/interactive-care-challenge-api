import UnitGroup from '../models/UnitGroup'

export default ({ unitType, title, introParagraph, subUnits }: UnitGroup) => ({
  introParagraph,
  subUnits,
  title,
  unitType,
})
