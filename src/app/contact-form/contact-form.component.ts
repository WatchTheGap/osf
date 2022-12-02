import { Component, OnInit, ViewChild, TemplateRef, ViewContainerRef  } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  FormData: FormGroup;

  @ViewChild('sent', { read: TemplateRef }) sent:any;

  constructor(private builder: FormBuilder, private contact: ContactService, private vref:ViewContainerRef) {
    this.FormData = this.builder.group({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      //validators for phone
      phone: new FormControl('', [Validators.required]),
      textbody: new FormControl('', [Validators.required])
      })
  }

  //TODO: Remove console logs

  onSubmit(data: any) {


    const contactObs = {
      next: (response: any) => {
        this.vref.createEmbeddedView(this.sent);
      },
      error: (err: Error) => console.error('Observer got an error: ', err.message),
      complete: () => {this.FormData.reset()},
    };

    this.contact.ContactUs(data).subscribe(contactObs);

  }

  ngOnInit(): void {
  }

}
