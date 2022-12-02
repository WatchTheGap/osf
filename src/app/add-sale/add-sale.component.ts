import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-sale',
  templateUrl: './add-sale.component.html',
  styleUrls: ['./add-sale.component.scss']
})
export class AddSaleComponent implements OnInit {

  user: any;

  user_id: any;
  vendor_id: any;

  constructor( private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.user_id = this.route.snapshot.paramMap.get('user_id');
    this.vendor_id = this.route.snapshot.paramMap.get('vendor_id');
    this.userService.getUserByID(this.user_id).subscribe(user => {this.user = user});
 };
}


