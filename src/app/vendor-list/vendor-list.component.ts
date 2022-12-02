import { Component, OnInit, Output } from '@angular/core';
import { Vendor } from '../vendor';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.scss']
})
export class VendorListComponent implements OnInit {

  vendors: Vendor[] = [];

  constructor(private vendorService:VendorService) { }


  getVendors() {
    this.vendorService.getVendors().subscribe(
      vendors => {
        this.vendors = vendors;
      }
    );
  }


  ngOnInit(): void {
    this.getVendors();

  }

}
