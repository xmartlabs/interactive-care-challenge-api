import CareUnit from './CareUnit'

export default class LearningUnit extends CareUnit {
  public static fromJson({
    unitType,
    title,
    section1Text,
    section1Media,
    section2Text,
    section2Media,
    section3Text,
    section3Media,
  }: any) {
    const learningUnit = new LearningUnit()
    learningUnit.unitType = unitType
    learningUnit.title = title
    learningUnit.section1Text = section1Text
    learningUnit.section1Media = section1Media
    learningUnit.section2Text = section2Text
    learningUnit.section2Media = section2Media
    learningUnit.section3Text = section3Text
    learningUnit.section3Media = section3Media

    return learningUnit
  }

  public unitType: string
  public title: string
  public section1Text: string
  public section1Media: string
  public section2Text: string
  public section2Media: string
  public section3Text: string
  public section3Media: string
}
