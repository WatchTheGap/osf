import { Component, OnInit, ViewChild, TemplateRef, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {

  SignupFormData: FormGroup;

  @ViewChild('successBtn') successBtn:any;

  @ViewChild('dupeWarn', { read: TemplateRef }) dupeWarn:any;
  @ViewChild('emailInvalid', { read: TemplateRef }) emailInvalid:any;




  constructor(private builder: FormBuilder, private userService: UserService, private vref:ViewContainerRef) {
    this.SignupFormData = this.builder.group({
      fullname: new FormControl('', [Validators.required]),
      email: new FormControl('', [
          Validators.required,
          Validators.email
        ]),
      //add Validators.pattern(/\/\/putRegexInHere/\/\/)
      //validators for phone
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.minLength(10),
        Validators.maxLength(10)]
        ),
      dob: new FormControl('', [Validators.required]),
      instagram: new FormControl(''),
      terms: [false, Validators.requiredTrue]

      })


   }

   triggerFalseClick() {
    let inputElement: HTMLElement = this.successBtn.nativeElement as HTMLElement;
    inputElement.click();
  }

  fixDate(d:any) {
    d.dob = new Date(d.dob.year, d.dob.month-1, d.dob.day);
  }

   addUser(form: User): void {
    if (form.email.includes('+')) {
      this.vref.createEmbeddedView(this.emailInvalid);
      return;
    }
    console.log('inside addUser', form);

    // Create observer object
const myObserver = {
  next: (user: User) => console.log('Observer got a next value: ' + user),
  error: (err: any) => {
    if (err.status === 422) {
      this.vref.createEmbeddedView(this.dupeWarn);

    }
    console.error('status', err.status);
  },
  complete: () => {
    this.triggerFalseClick()
    this.SignupFormData.reset();
  },
};


      this.userService.addUser(form)
        .subscribe(myObserver)
    }


   onSubmit(data: any) {

    if (typeof data.dob === 'object') {
      data.dob = new Date(data.dob.year, data.dob.month-1, data.dob.day);
      let newdata = data;
      this.addUser(newdata);
    }
    else {
    }
    // this.addUser(data);
   }

  ngOnInit(): void {
  }

}
