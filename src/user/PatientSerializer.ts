import Patient from '../models/Patient'

export default ({ name, journeys, id }: Patient) => ({
  id,
  journeys,
  name,
})
