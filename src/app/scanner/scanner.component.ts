import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss']
})
export class ScannerComponent implements OnInit {

  private scannerEnabled: boolean = true;
  private user: User[] = [];
  private information: string = "No QR Code Detected.";


  constructor(private userService: UserService, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  public scanSuccessHandler($event: any) {
    this.scannerEnabled = false;
    this.information = "processing...";
    console.log("Hi", $event);

    // TODO: add "captured" popup & route to add sale
  }

  public enableScanner() {
    this.scannerEnabled = !this.scannerEnabled;
    this.information = "No QR Code Detected";
    console.log("enableScanner")
  }

}
