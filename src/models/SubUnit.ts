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

  public static fromJson({ unitType, title, items, name }: any) {
    const questionUnit = new SubUnit()
    questionUnit.name = name
    questionUnit.unitType = unitType
    questionUnit.title = title
    questionUnit.sections = items

    return questionUnit
  }
}
