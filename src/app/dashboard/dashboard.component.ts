import { Component, OnInit, Input, OnChanges, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { Vendor } from '../vendor';
import { Sale } from '../sale';
import { User } from '../user';
import { UserService } from '../user.service';
import { SaleService } from '../sale.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnChanges {

  @Input() vendor: any;
  @Input() admin: any;

  @ViewChild('winnerBtn') winnerBtn:any;

  sales: Sale[]=[];
  set3: any = [];
  user: any;
  winners: User[]=[];

  constructor( private saleService: SaleService,
               private userService: UserService,
               private modalService: NgbModal
               ) { }

    triggerFalseClick() {
      console.log('inside triggerFalseClick');
      let inputElement: HTMLElement = this.winnerBtn.nativeElement as HTMLElement;
      inputElement.click();
    }


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

    const winnerObs = {
      next: (user: User) => { this.user = user;
        this.winners.push(user);
        console.log(user, this.winners);
      },
      error: (err: Error) => console.error('Observer got an error: ', err.message),
      complete: () => { console.log('inside complete'); this.triggerFalseClick()}

    }
    let   set1: any = [];

    this.sales.forEach(function(e) {
      let set2 = Array(e.tickets).fill([e.user_id]);
      set1.push(set2);
  });
  let flatty = set1.flat();
  let chosen = Math.floor(Math.random() * flatty.length);
  let winnerID = flatty[chosen];
  //user_id is always in the first index of the chosen array so we need to use winnerID[0]
  this.userService.getUserByID(winnerID[0]).subscribe(winnerObs);
  }


  ngOnChanges() {

  }

  ngOnInit(): void {

  }

}
