import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Sale } from '../sale';
import { User } from '../user';
import { Vendor } from '../vendor';
import { SaleService } from '../sale.service';

@Component({
  selector: 'app-add-sale-form',
  templateUrl: './add-sale-form.component.html',
  styleUrls: ['./add-sale-form.component.scss']
})
export class AddSaleFormComponent implements OnInit {

  @Input() user_id: any;
  @Input() vendor_id: any;

  AddSaleFormData: FormGroup

  constructor(
    private router: Router,
    private builder: FormBuilder,
    public saleService: SaleService) {
    this.AddSaleFormData= this.builder.group({
      amount: new FormControl('', [Validators.required]),
      tickets: new FormControl('', [Validators.required]),
      user_id: this.user_id,
      vendor_id: this.vendor_id
      })
  }

  addSale(form: Sale): void {

    form.user_id = this.user_id;
    form.vendor_id = this.vendor_id;

    const myObserver = {
      next: (sale: Sale) => {},
      error: (err: Error) => {},
      complete: () => {  this.router.navigate(['/vendor/' + this.vendor_id]);
      },
    };

    this.saleService.addSale(form).subscribe(myObserver)
  }

  ngOnInit(): void {
  }

    onSubmit(data: Sale) {
      this.addSale(data);
     }
}
