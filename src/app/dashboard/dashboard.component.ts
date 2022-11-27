import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Vendor } from '../vendor';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnChanges {

  @Input() vendor: any;

  sales_total: number = 0;
  tickets_total: number = 0;


  // TODO: THIS NEEDS TO ACCESS THE **AMOUNT** VALUES FOR EACH SALE AND ADD THEM TO THE TOTAL
  totalSales(sales:any) {
    if (this.vendor.sales) {
      let total: number;
      sales = this.vendor.sales;
      sales.forEach(function(e:number) {
        total = e + total;
        console.log(total);
      });
      total = this.sales_total;
      console.log(this.sales_total);
    }
    else {
       console.log(this.sales_total)
    }


  }

  constructor() { }

  ngOnChanges() {
    if (this.vendor) {
      console.log(this.vendor);
      this.totalSales(this.vendor.sales);
    }
  }

  ngOnInit(): void {

  }

}
