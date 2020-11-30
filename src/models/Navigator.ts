
export default class Navigator {
  public static fromJson({ name, description, urlPhoto }: any) {
    const navigator = new Navigator()
    navigator.name = name
    navigator.description = description
    navigator.urlPhoto = urlPhoto
    return navigator
  }

  public name: string
  public description: string
  public urlPhoto: string
}
