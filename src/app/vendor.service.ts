import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Vendor } from './vendor';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  constructor(private http:HttpClient) { }

  getVendors(): Observable<Vendor[]> {
    let vendorUrl = environment.baseUrl + "/vendors";
    return this.http.get<Vendor[]>(vendorUrl);
  }
}
