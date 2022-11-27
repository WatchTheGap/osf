export class Vendor {
  id: number;
  fullname: string;
  email: string;
  instagram: string;
  thumbnail: string;
  desc: string;
  password: string;
  phone: string;
  shopname: string;

  constructor(id: number,
    fullname: string,
              email: string,
              instagram: string,
              thumbnail: string,
              desc: string,
              password: string,
              phone: string,
              shopname: string) {
    this.id = id;
    this.fullname = fullname;
    this.email = email;
    this.instagram = instagram;
    this.thumbnail = thumbnail;
    this.desc = desc;
    this.password = password;
    this.phone = phone;
    this.shopname = shopname;
  }
}
