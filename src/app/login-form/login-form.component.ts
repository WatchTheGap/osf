import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  LoginFormData: FormGroup

  constructor(
    private router: Router,
    private builder: FormBuilder) {
    this.LoginFormData= this.builder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
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
