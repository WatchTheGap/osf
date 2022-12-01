import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  // admin: Admin | undefined;

  admin: Admin = {
    id: 9000,
    fullname: "Sara Basile",
    email: "sara@snbasile.com",
    phone: "5164283536",
  }

  constructor(private adminService: AdminService, private route: ActivatedRoute) { }

  ngOnInit(): void {


    this.route.params.subscribe(params => {
      const id = +params['id'];
        if (id) {
          this.adminService.getAdmin(id).subscribe(
            admin => {
              this.admin = admin;
            }
          );
        }
       });
  }

}
