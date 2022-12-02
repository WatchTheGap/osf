import { Component, OnInit, Input, OnChanges, Renderer2, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Vendor } from '../vendor';
import { Sale } from '../sale';
import { User } from '../user';
import { UserService } from '../user.service';
import { SaleService } from '../sale.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]
})
export class DashboardComponent implements OnChanges {

  @Input() vendor: any;
  @Input() admin: any;

  @ViewChild('winnerBtn') winnerBtn:any;
  @ViewChild('drumroll') drumroll: any;

  sales: Sale[]=[];
  set3: any = [];
  user: any;
  winners: User[]=[];

  constructor( private saleService: SaleService,
               private userService: UserService,
               private vref:ViewContainerRef,
               public location: Location,
               private router: Router               ) { }

    triggerFalseClick() {
      let inputElement: HTMLElement = this.winnerBtn.nativeElement as HTMLElement;
      inputElement.click();
    }


  getAllTickets() {
    const myObserver = {
      next: (sales: Sale[]) => {
      this.sales = sales;
    },
      error: (err: Error) => {},
    complete: () => {this.processTickets()}
  };
    this.saleService.getSales().subscribe(myObserver);
  }

  goToWinners() {
    this.router.navigate(['/admin/' + this.admin.id + '/raffle']);
  }

  processTickets() {

    this.vref.createEmbeddedView(this.drumroll);

    const winnerObs = {
      next: (user: User) => { ; this.user = user;
        this.winners.push(user);
      },
      error: (err: Error) => {},
      complete: () => {
        setTimeout(() => {
          this.vref.remove(0);
          this.triggerFalseClick();
        }, 5000);
      }
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

  hasRoute(route: string) {
    return this.router.url.includes(route);
  }

  ngOnChanges() {

  }

  ngOnInit(): void {

  }

}
