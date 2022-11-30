import { Component, OnInit, ViewChild } from '@angular/core';
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


  constructor(private builder: FormBuilder, private userService: UserService) {
    this.SignupFormData = this.builder.group({
      fullname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      //add Validators.pattern(/\/\/putRegexInHere/\/\/)
      //validators for phone
      phone: new FormControl('', [Validators.required]),
      dob: new FormControl('', [Validators.required]),
      instagram: new FormControl(''),
      terms: [false, Validators.requiredTrue]

      })


   }

   triggerFalseClick() {
    console.log('inside triggerFalseClick');
    let inputElement: HTMLElement = this.successBtn.nativeElement as HTMLElement;
    inputElement.click();
  }

  fixDate(d:any) {
    d.dob = new Date(d.dob.year, d.dob.month-1, d.dob.day);
  }

   addUser(form: User): void {
    console.log('inside addUser', form);

    // Create observer object
const myObserver = {
  next: (user: User) => console.log('Observer got a next value: ' + user),
  error: (err: Error) => console.error('Observer got an error: ' + err.message),
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
      console.log('its an object');
      data.dob = new Date(data.dob.year, data.dob.month-1, data.dob.day);
      console.log('after? ',data.dob, data);
      let newdata = data;
      this.addUser(newdata);
    }
    else {
      console.log('not object?');
    }
    // this.addUser(data);
   }

  ngOnInit(): void {
  }

}
