import Checklist from "../models/Checklist";


export default ({ unitType, title, introParagraph, items, additionalInfo }: Checklist) => ({
  unitType,
  title,
  introParagraph,
  items,
  additionalInfo,
});
