export class User {
  fullname: string;
  email: string;
  phone: number;
  dob: Date;
  instagram: string;

  constructor(fullname: string, email: string,
              phone: number, dob: Date, instagram: string) {
    this.fullname = fullname;
    this.email = email;
    this.phone = phone;
    this.dob = dob;
    this.instagram = instagram;
  }
}
