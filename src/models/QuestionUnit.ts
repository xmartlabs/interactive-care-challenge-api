import CareUnit from './CareUnit'

export default class QuestionUnit extends CareUnit {
  public static fromJson({ unitType, title, introParagraph, items }: any) {
    const questionUnit = new QuestionUnit()
    questionUnit.unitType = unitType
    questionUnit.title = title
    questionUnit.introParagraph = introParagraph
    questionUnit.items = items

    return questionUnit
  }

  public unitType: string
  public title: string
  public introParagraph: string
  public items: string[]
}
