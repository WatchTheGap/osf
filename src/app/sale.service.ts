import { Injectable } from '@angular/core';
import { Sale } from './sale';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from './user';
import { Vendor } from './vendor';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  constructor(private http: HttpClient) { }

  addSale( sale:Sale ): Observable<Sale> {
    const addSaleUrl = environment.baseUrl + '/sales';
     return this.http.post<Sale>(addSaleUrl, sale);
   }

   getSalesByVendor(id: any): Observable<Sale[]> {
    const getSalesUrl = environment.baseUrl + '/sales?vendor_id=' + id;
     return this.http.get<Sale[]>(getSalesUrl);
   }

   getSales(): Observable<Sale[]> {
    const getSalesUrl = environment.baseUrl + '/sales';
     return this.http.get<Sale[]>(getSalesUrl);
   }
}
