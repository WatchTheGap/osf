import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Vendor } from '../vendor';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  LoginFormData: FormGroup

  constructor(
    private router: Router,
    private builder: FormBuilder,
    public vendorService: VendorService) {
    this.LoginFormData= this.builder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
      })
  }



  getVendor(email:string, password:string) {
          // Create observer object
const myObserver = {
  next: (vendor: Vendor) =>
  // console.log('Observer got a next value: ' + vendor.instagram),
  this.router.navigate(['/vendor/' + vendor.id]),
  error: (err: Error) => console.error('Observer got an error: ' + err.message),
  complete: () => console.log('Observer got a complete notification'),
};
    this.vendorService.verifyVendor(email, password).subscribe(myObserver);

  }

  ngOnInit(): void {
  }

  // TODO: remove logs, router needs to accept response from login service
  onSubmit(data: any) {
    this.getVendor(data.email, data.password)
    console.log(data)
    // this.router.navigate(['/vendor/']);

   }

}
