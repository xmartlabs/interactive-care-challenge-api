import LearningUnit from '../models/LearningUnit'

export default ({
  unitType,
  title,
  section1Text,
  section1Media,
  section2Text,
  section2Media,
  section3Text,
  section3Media,
}: LearningUnit) => ({
  section1Media,
  section1Text,
  section2Media,
  section2Text,
  section3Media,
  section3Text,
  title,
  unitType,
})
