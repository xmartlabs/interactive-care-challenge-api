import Checklist from './Checklist'
import QuestionUnit from './QuestionUnit'

export interface MediaContent {
  filename: string
  id: string
  size: number
  thumbnails: {
    small: { url: string }
    large: { url: string }
    full: { url: string }
  }
  type: string
  url: string
}

export interface Section {
  type: string
  content: string | MediaContent[]
}

export class SubUnit {
  public unitType: string
  public title: string
  public sections: Section[]
  public name: string
  public introParagraph?: string
  public items?: QuestionUnit['items']
  public additionalInfo: Checklist['additionalInfo']

  public static fromJson({
    unitType,
    title,
    sections,
    name,
    introParagraph,
    items,
  }: any) {
    const subUnit = new SubUnit()
    subUnit.name = name
    subUnit.unitType = unitType
    subUnit.title = title
    subUnit.sections = sections
    subUnit.introParagraph = introParagraph
    subUnit.items = items

    return subUnit
  }
}
