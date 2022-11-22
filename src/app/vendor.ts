export class Vendor {
  fullname: string;
  email: string;
  instagram: string;
  thumbnail: string;
  desc: string;
  password: string;
  phone: string;
  shopname: string;

  constructor(fullname: string,
              email: string,
              instagram: string,
              thumbnail: string,
              desc: string,
              password: string,
              phone: string,
              shopname: string) {
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
