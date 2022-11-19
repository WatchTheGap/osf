import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Sale } from '../sale';
import { SaleService } from '../sale.service';

@Component({
  selector: 'app-add-sale-form',
  templateUrl: './add-sale-form.component.html',
  styleUrls: ['./add-sale-form.component.scss']
})
export class AddSaleFormComponent implements OnInit {

  AddSaleFormData: FormGroup


  constructor(
    private router: Router,
    private builder: FormBuilder) {
    this.AddSaleFormData= this.builder.group({
      amount: new FormControl('', [Validators.required]),
      tickets: new FormControl('', [Validators.required])
      })
  }
  ngOnInit(): void {
  }

    // TODO: remove logs, router needs to accept response from login service
    onSubmit(data: any) {
      console.log(data)
      this.router.navigate(['/vendor/']);

     }
}
