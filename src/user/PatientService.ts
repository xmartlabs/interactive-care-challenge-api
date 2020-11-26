import userRepository, { PatientRepository } from './PatientRepository';

export class PatientService {
  private repository: PatientRepository;

  constructor(repository: PatientRepository) {
    this.repository = repository;
  }

  public findPatient(id: string) {
    return this.repository.findOne(id);
  }
}

export default new PatientService(userRepository);
