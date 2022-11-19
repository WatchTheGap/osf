import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private api='https://mailthis.to/sara@snbasile.com'

  constructor(private http:HttpClient) { }

    //TODO: Remove console logs


  ContactUs(input: any) {

    return this.http.post(this.api, input, {responseType: 'text'}).subscribe(data => console.log(data));

  }
}
