import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CsvServiceService {

  constructor(private http: HttpClient) {}

  getCsvData() {
    return this.http.get('http://localhost:8200/api/csv/data', { responseType: 'text' });
  }
  getInvoices() {
    return this.http.get<any>('http://localhost:8200/api/csv/data');
  }
 
 

}
