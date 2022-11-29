export class Admin {
  id: number;
  fullname: string;
  email: string;
  phone: string;

  constructor(id: number,
              fullname: string,
              email: string,
            phone: string) {
    this.id = id;
    this.fullname = fullname;
    this.email = email;
    this.phone = phone;
    }
}
