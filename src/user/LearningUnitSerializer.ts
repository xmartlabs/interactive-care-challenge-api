import LearningUnit from "../models/LearningUnit";


export default ({ unitType, title, section1Text, section1Media, section2Text, section2Media, section3Text, section3Media }: LearningUnit) => ({
  unitType,
  title,
  section1Text,
  section1Media,
  section2Text,
  section2Media,
  section3Text,
  section3Media,
});
