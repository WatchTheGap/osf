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


  constructor( private userService: UserService,
               private vendorService: VendorService,
               private cd: ChangeDetectorRef,
               public router: Router,
               public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.vendorService.getVendor(id).subscribe(
        vendor => {
          this.vendor = vendor;
        }
      );
   });
  }

  public scanSuccessHandler($event: any) {
    this.scannerEnabled = false;
    const myObserver = {
      next: (user: User) => {
        this.router.navigate(['vendor/' + this.vendor.id + '/addsale/' + user.id]);
      },
      error: (err: Error) => {},
      complete: () => {},
    };
    this.userService.getUser($event).subscribe(myObserver);

    // TODO: add "captured" popup & route to add sale
  }

  public enableScanner() {
    this.scannerEnabled = !this.scannerEnabled;
  }
}
