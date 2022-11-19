import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {

  SignupFormData: FormGroup;

    public myAngularxQrCode: string;

  constructor(private builder: FormBuilder) {
    this.SignupFormData = this.builder.group({
      fullname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      //validators for phone
      phone: new FormControl('', [Validators.required]),
      dob: new FormControl('', [Validators.required]),
      instagram: new FormControl(''),
      terms: [false, Validators.requiredTrue]

      })

      this.myAngularxQrCode = ''



   }

   onSubmit(data: any) {
    this.myAngularxQrCode = data.email;


    console.log(data.email)
   }

  ngOnInit(): void {
  }

}
