import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Vendor } from '../vendor';
import { Sale } from '../sale';
import { User } from '../user';
import { UserService } from '../user.service';
import { SaleService } from '../sale.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnChanges {

  @Input() vendor: any;
  @Input() admin: any;

  sales: Sale[]=[];
  set3: any = [];
  user: User | undefined;

  constructor(private saleService: SaleService, private userService: UserService) { }



  getAllTickets() {
    console.log('inside getAllTickets');
        // Create observer object
    const myObserver = {
      next: (sales: Sale[]) => {
      this.sales = sales;
      console.log(sales);
    },
      error: (err: Error) => console.error('Observer got an error: ', err.message),
    complete: () => {this.processTickets()}
  };
    this.saleService.getSales().subscribe(myObserver);
  }

  processTickets() {
    let   set1: any = [];

    this.sales.forEach(function(e) {
      let set2 = Array(e.tickets).fill([e.user_id]);
      set1.push(set2);
  });
  let flatty = set1.flat();
  let chosen = Math.floor(Math.random() * flatty.length);
  console.log(flatty, flatty.length, chosen);
  this.userService.getUserByID(chosen).subscribe(user => {this.user = user; console.log(user)})
  }


  ngOnChanges() {

  }

  ngOnInit(): void {

  }

}
