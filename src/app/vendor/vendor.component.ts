import { Component, OnInit } from '@angular/core';
import { Vendor } from '../vendor';
import { VendorService } from '../vendor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss']
})
export class VendorComponent implements OnInit {

vendor: Vendor | undefined;

isAdmin: boolean = false;

  constructor(public vendorService:VendorService,private route: ActivatedRoute,
    ) { }

    ngOnInit() {
      this.route.params.subscribe(params => {
      const id = +params['id'];
        if (id) {
          this.vendorService.getVendor(id).subscribe(
            vendor => {
              this.vendor = vendor;
            }
          );
        }
       });
 }
}
