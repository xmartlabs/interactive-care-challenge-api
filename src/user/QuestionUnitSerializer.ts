import QuestionUnit from '../models/QuestionUnit'

export default ({ unitType, title, introParagraph, items }: QuestionUnit) => ({
  introParagraph,
  items,
  title,
  unitType,
})
