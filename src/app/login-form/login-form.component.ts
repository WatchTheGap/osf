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
    const vendorObs = {
      next: (vendor: Vendor) => { if (vendor) {
       localStorage.setItem('SessionUser',vendor.id.toString());
        this.router.navigate(['/vendor/' + vendor.id]);
        }
        else {
          this.vref.createEmbeddedView(this.incorrect);
        }
     },
      error: (err: Error) => { },
      complete: () => {},
    };
    this.vendorService.verifyVendor(email, password).subscribe(vendorObs);
  }

  getAdmin(email:string, password:string) {
    const adminObs = {
      next: (admin: Admin) => {
        localStorage.setItem('SessionUser',admin.id.toString());
        this.router.navigate(['/admin/' + admin.id]);
      },
      error: (err: Error) => {},
      complete: () => {},
    };
    this.adminService.verifyAdmin(email, password).subscribe(adminObs);
  }

  ngOnInit(): void {
  }

  onSubmit(data: any) {
    if (this.router.url.includes('login')) {
      this.getVendor(data.email, data.password);
    }
    else if (this.router.url.includes('admin')) {
      this.getAdmin(data.email, data.password);
    }
   }

}
