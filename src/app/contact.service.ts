import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }

  ContactUs(input: any) {
    const sendContactUrl = environment.baseUrl + '/contact-team';
    return this.http.post(sendContactUrl, input);
  }
}
