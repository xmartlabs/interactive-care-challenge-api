import QuestionUnit from "../models/QuestionUnit";


export default ({ unitType, title, introParagraph, items }: QuestionUnit) => ({
  unitType,
  title,
  introParagraph,
  items
});
