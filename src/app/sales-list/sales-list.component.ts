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

  sales: Sale[] = []

  constructor(private saleService: SaleService) { }

  getSalesByVendor(id:any) {
    this.saleService.getSalesByVendor(id).subscribe(
      sales => {
        this.sales = sales;
        console.log(sales)
      }
    )
  }

  ngOnInit(): void {
    this.getSalesByVendor(this.vendor.id);
  }

}
