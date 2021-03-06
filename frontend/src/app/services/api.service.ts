import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  readonly URI = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

  getHome(): Observable<any>{
    return this.http.get(this.URI);
  }
}
