export default class Patient {
    public static fromJson({ firstName, lastName, email, id }: any) {
      const user = new Patient();
      user.firstName = firstName;
      user.lastName = lastName;
      user.email = email;
      user.id = id;
      return user;
    }

    public id: number;
    public firstName: string;
    public lastName: string;
    public email: string;
}
