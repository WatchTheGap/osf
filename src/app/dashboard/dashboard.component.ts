import { Component, OnInit, Input, OnChanges, Renderer2, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Vendor } from '../vendor';
import { Sale } from '../sale';
import { User } from '../user';
import { UserService } from '../user.service';
import { SaleService } from '../sale.service';
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
  @ViewChild('done') done: any;



  sales: Sale[]=[];
  set3: any = [];
  user: any;
  winners: User[]=[];
  users: User[] = [];

  constructor( private saleService: SaleService,
               private userService: UserService,
               private vref:ViewContainerRef,
               public location: Location,
               private router: Router               ) { }

    triggerFalseClick() {
      let inputElement: HTMLElement = this.winnerBtn.nativeElement as HTMLElement;
      inputElement.click();
    }
    hasRoute(route: string) {
      return this.router.url.includes(route);
    }
    goToWinners() {
      this.router.navigate(['/admin/' + this.admin.id + '/raffle']);
      if (this.hasRoute('raffle')) {
        location.reload();
      }
    }



  getAllTickets() {
    const getTixObs = {
      next: (sales: Sale[]) => {
      this.sales = sales;
    },
      error: (err: Error) => {},
    complete: () => {this.processTickets()}
  };
    this.saleService.getSales().subscribe(getTixObs);
  }



  processTickets() {

    this.vref.createEmbeddedView(this.drumroll);

    const userObs = {
      next: (user: User) => { ; this.user = user;
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

      if (!e.user.winner) {
        let set2 = Array(e.tickets).fill([e.user_id]);
        set1.push(set2);
      }

    });

    let flatty = set1.flat();
    let chosen = Math.floor(Math.random() * flatty.length);
    let winnerID = flatty[chosen];

    if (flatty.length > 0) {
    //user_id is always in the first index of the chosen array so we need to use winnerID[0]
    this.userService.addWinner(winnerID[0]).subscribe();
    this.userService.getUserByID(winnerID[0]).subscribe(userObs);
    }
    else {
      this.vref.remove(0);
      this.vref.createEmbeddedView(this.done);

    }

  }

  getAllWinners() {
    const getAllObs = {
      next: (users: User[]) => {
      this.users = users;
    },
      error: (err: Error) => {},
    complete: () => {this.sort(this.users)}
  };

    this.userService.getUsers().subscribe(getAllObs)
  }

  sort(u: User []) {
    let winners = this.winners;
    u.forEach(function(e) {
      if (e.winner) {
        winners.push(e);
      }
    })

  }

  ngOnChanges() {

  }

  ngOnInit(): void {
    this.getAllWinners();

  }

}
