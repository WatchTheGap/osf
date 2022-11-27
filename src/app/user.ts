export class User {
  id: number;
  fullname: string;
  email: string;
  phone: number;
  dob: Date;
  instagram: string;

  constructor(id: number, fullname: string, email: string,
              phone: number, dob: Date, instagram: string) {
    this.id = id;
    this.fullname = fullname;
    this.email = email;
    this.phone = phone;
    this.dob = dob;
    this.instagram = instagram;
  }
}
