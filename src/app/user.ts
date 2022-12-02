export class User {
  id: number;
  fullname: string;
  email: string;
  phone: string;
  dob: Date;
  instagram: string;
  winner: boolean;

  constructor(id: number, fullname: string, email: string,
              phone: string, dob: Date, instagram: string, winner: boolean) {
    this.id = id;
    this.fullname = fullname;
    this.email = email;
    this.phone = phone;
    this.dob = dob;
    this.instagram = instagram;
    this.winner = winner;
  }
}
