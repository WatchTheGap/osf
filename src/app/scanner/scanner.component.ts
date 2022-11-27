import { Component, OnInit, ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Router, ActivatedRoute } from '@angular/router';
import { Vendor } from '../vendor';
import { VendorService } from '../vendor.service';


@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss']
})
export class ScannerComponent implements OnInit {

  user: any;
  vendor: any;

  private scannerEnabled: boolean = true;
  private information: string = "No QR Code Detected.";


  constructor( private userService: UserService,
               private vendorService: VendorService,
               private cd: ChangeDetectorRef,
               public router: Router,
               public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      console.log(id);
      this.vendorService.getVendor(id).subscribe(
        vendor => {
          this.vendor = vendor;
          console.log("scanner component ", vendor);
        }
      );
   });
  }

  public scanSuccessHandler($event: any) {
    this.scannerEnabled = false;
    this.information = "processing...";
    console.log("Hi", $event);

    const myObserver = {
      next: (user: User) => {
        this.router.navigate(['vendor/' + this.vendor.id + '/addsale/' + user.id]);
      },
      error: (err: Error) => console.error('Observer got an error: ' + err.message),
      complete: () => console.log('Observer got a complete notification'),
    };
    this.userService.getUser($event).subscribe(myObserver);

    // TODO: add "captured" popup & route to add sale
  }

  public enableScanner() {
    this.scannerEnabled = !this.scannerEnabled;
    this.information = "No QR Code Detected";
    console.log("enableScanner")
  }

}
