import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Artist } from './artist';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor() { }
}
