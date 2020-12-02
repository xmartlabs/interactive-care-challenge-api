import { Section, SubUnit } from '../models/SubUnit'

export const SubUnitsSerializer = (subUnitData: any): SubUnit => {
  const name = subUnitData.Name
  const title = subUnitData.Title
  const unitType = subUnitData['Unit Type']
  const sectionsKeys = Object.keys(subUnitData).filter((keyValue) =>
    keyValue.toLowerCase().includes('Section'.toLowerCase()),
  )
  let sections: Section[] = []

  for (const sectionKey of sectionsKeys) {
    let sectionContent
    if (sectionKey.includes('Text')) {
      sectionContent = subUnitData[sectionKey]
    }else{
      sectionContent = subUnitData[sectionKey][0]['url']
    }
    sections.push({
      content: sectionContent,
      type: sectionKey.includes('Text') ? 'Text' : 'Media',
    })
  }

  return {
    name,
    sections,
    title,
    unitType,
  }
}
