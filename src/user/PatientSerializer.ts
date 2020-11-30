import Patient from '../models/Patient'
import Navigator from '../models/Navigator'

export default ({ name, journeys, navigator, id }: Patient) => ({
  id,
  journeys,
  name,
  navigator,
})
