export class Artist {
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  birthdate: Date;
  instagram: string;
  blurb: string;

  constructor(firstName: string, lastName: string, email: string,
              phone: number, birthdate: Date, instagram: string, blurb: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
    this.birthdate = birthdate;
    this.instagram = instagram;
    this.blurb = blurb;
  }
}
