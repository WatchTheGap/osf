export class Vendor {
  fullname: string;
  email: string;
  instagram: string;
  thumbnail: string;
  desc: string;
  password: string;

  constructor(fullname: string,
              email: string,
              instagram: string,
              thumbnail: string,
              desc: string,
              password: string) {
    this.fullname = fullname;
    this.email = email;
    this.instagram = instagram;
    this.thumbnail = thumbnail;
    this.desc = desc;
    this.password = password;
  }
}
