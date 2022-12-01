import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Admin } from './admin';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  verifyAdmin(email:any, password:any): Observable<Admin> {
    let adminUrl = environment.baseUrl + "/admins?email=" + email + "&password=" + password;
    return this.http.get<Admin>(adminUrl);
  }
  getAdmin(id:any): Observable<Admin> {
    let adminUrl = environment.baseUrl + "/admins/" + id;
    return this.http.get<Admin>(adminUrl);
  }
}
