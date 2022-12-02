import { Component, OnInit, Input, OnChanges, ViewChild, ViewContainerRef } from '@angular/core';
import { Sale } from '../sale';
import { Vendor } from '../vendor';
import { Admin } from '../admin';
import { SaleService } from '../sale.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-winners-list',
  templateUrl: './winners-list.component.html',
  styleUrls: ['./winners-list.component.scss']
})
export class WinnersListComponent implements OnInit {

@Input() winners: any;
@Input() admin: any;

@ViewChild('confirm') confirm: any;

sales: Sale[]=[];
id: any;


  constructor(private saleService: SaleService, private userService: UserService, private vref:ViewContainerRef,
    ) { }


  getSales() {
    this.saleService.getSales().subscribe(
      sales => {
        this.sales = sales;
      }
    )
  }

  confirmDelete(id: number) {
    this.id = id;
    this.vref.createEmbeddedView(this.confirm);
  }

  closeConfirm() {
    this.vref.remove(0);
  }

  deleteWinner(id:any) {
    this.userService.removeWinner(id).subscribe()
    this.closeConfirm();
  }

  ngOnInit(): void {
    this.getSales();
  }

}
