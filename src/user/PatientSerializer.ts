import Patient from '../models/Patient';

export default ({ name, journeys, id }: Patient) => ({
  name,
  journeys,
  id,
});
