import { Component, OnInit } from '@angular/core';
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

    public myAngularxQrCode: string;

  constructor(private builder: FormBuilder, private userService: UserService) {
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

   addUser(form: User): void {
    console.log('inside addUser', form);

    // Create observer object
const myObserver = {
  next: (user: User) => console.log('Observer got a next value: ' + user),
  error: (err: Error) => console.error('Observer got an error: ' + err.message),
  complete: () => console.log('Observer got a complete notification'),
};


      this.userService.addUser(form)
        .subscribe(myObserver)
    }



   onSubmit(data: any) {
    // this.myAngularxQrCode = data.email;
    this.addUser(data);




    // console.log(data.email)
   }

  ngOnInit(): void {
  }

}
