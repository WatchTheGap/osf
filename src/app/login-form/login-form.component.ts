import { Component, OnInit, ViewChild, TemplateRef, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Vendor } from '../vendor';
import { VendorService } from '../vendor.service';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  LoginFormData: FormGroup

  @ViewChild('incorrect', { read: TemplateRef }) incorrect:any;


  constructor(
    private router: Router,
    private builder: FormBuilder,
    public vendorService: VendorService,
    public adminService: AdminService,
    private vref:ViewContainerRef) {
    this.LoginFormData= this.builder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
      })
  }



  getVendor(email:string, password:string) {
          // Create observer object
const vendorObs = {
  next: (vendor: Vendor) => { if (vendor) {
    localStorage.setItem('SessionUser',vendor.id.toString());
    this.router.navigate(['/vendor/' + vendor.id]);
  }
  else {
    this.vref.createEmbeddedView(this.incorrect);
  }

  },
  // console.log('Observer got a next value: ' + vendor.instagram),
error: (err: Error) => { console.log(err);
},
  complete: () => {console.log('Observer got a complete notification')},
};
    this.vendorService.verifyVendor(email, password).subscribe(vendorObs);

  }

  getAdmin(email:string, password:string) {
    // Create observer object
const adminObs = {
next: (admin: Admin) => {
  localStorage.setItem('SessionUser',admin.id.toString());
  this.router.navigate(['/admin/' + admin.id]);
},
// console.log('Observer got a next value: ' + vendor.instagram),
error: (err: Error) => console.error('Observer got an error: ' + err.message),
complete: () => console.log('Observer got a complete notification'),
};
this.adminService.verifyAdmin(email, password).subscribe(adminObs);

}

  ngOnInit(): void {
  }

  // TODO: remove logs, router needs to accept response from login service
  onSubmit(data: any) {
    if (this.router.url.includes('login')) {
      this.getVendor(data.email, data.password)
    }
    else if (this.router.url.includes('admin')) {
      this.getAdmin(data.email, data.password)

    }
    // this.router.navigate(['/vendor/']);

   }

}
