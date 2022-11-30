import { Component, OnInit, Input } from '@angular/core';
import { Sale } from '../sale';
import { Vendor } from '../vendor';
import { SaleService } from '../sale.service';

@Component({
  selector: 'app-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.scss']
})
export class SalesListComponent implements OnInit {

  @Input() vendor: any;
  @Input() admin: any;
  @Input() winners: any;

  sales: Sale[] = []

  total: number = 0;

  constructor(private saleService: SaleService) { }

  getSales() {
    this.saleService.getSales().subscribe(
      sales => {
        this.sales = sales;
      }
    )
  }

  getSalesByVendor(id:any) {
    this.saleService.getSalesByVendor(id).subscribe(
      sales => {
        this.sales = sales;
      }
    )
  }


  ngOnInit(): void {

    if (this.admin) {
      this.getSales();
    }
    else {
      this.getSalesByVendor(this.vendor.id);
    }
  }

}
