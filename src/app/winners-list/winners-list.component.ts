import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Sale } from '../sale';
import { Vendor } from '../vendor';
import { Admin } from '../admin';
import { SaleService } from '../sale.service';

@Component({
  selector: 'app-winners-list',
  templateUrl: './winners-list.component.html',
  styleUrls: ['./winners-list.component.scss']
})
export class WinnersListComponent implements OnInit {

@Input() winners: any;
@Input() admin: any;

sales: Sale[]=[];


  constructor(private saleService: SaleService) { }


  getSales() {
    this.saleService.getSales().subscribe(
      sales => {
        this.sales = sales;
      }
    )
  }

  ngOnInit(): void {
    this.getSales();
  }

}
