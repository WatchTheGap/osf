import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from './user';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  addUser( user:User ): Observable<User> {
    const addUserUrl = environment.baseUrl + "users";
     return this.http.post<User>(addUserUrl, user);
   }
}
