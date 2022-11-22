import { Component, OnInit, Input } from '@angular/core';
import { Vendor } from '../vendor';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.scss']
})
export class VendorDetailComponent implements OnInit {


  @Input() vendor: any;

  constructor() { }


  ngOnInit(): void {
  }


}
