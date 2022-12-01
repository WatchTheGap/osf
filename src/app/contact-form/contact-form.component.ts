import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  FormData: FormGroup;


  constructor(private builder: FormBuilder, private contact: ContactService) {
    this.FormData = this.builder.group({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      //validators for phone
      phone: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required])
      })
  }

  //TODO: Remove console logs

  onSubmit(stuff: any) {

    console.log("Wheeeee!)", stuff)

    const contactObs = {
      next: (response: any) => console.log('Observer got a next value: ', response),
      error: (err: Error) => console.error('Observer got an error: ', err.message),
      complete: () => console.log('Observer got a complete notification'),
    };

    this.contact.ContactUs(stuff).subscribe(contactObs);

  }

  ngOnInit(): void {
  }

}
