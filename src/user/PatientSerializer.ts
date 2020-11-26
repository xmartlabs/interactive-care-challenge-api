import Patient from '../models/Patient';

export default ({ email, lastName, firstName, id }: Patient) => ({
  email,
  firstName,
  id,
  lastName,
});
