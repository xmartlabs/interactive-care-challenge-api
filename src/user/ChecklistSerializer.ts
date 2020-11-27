import Checklist from '../models/Checklist'

export default ({
  unitType,
  title,
  introParagraph,
  items,
  additionalInfo,
}: Checklist) => ({
  additionalInfo,
  introParagraph,
  items,
  title,
  unitType,
})
