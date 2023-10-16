import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionStorageService } from './session-storage.service';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private baseUrl = 'http://localhost:8200/user'; 
  constructor(private router: Router,private  http: HttpClient, private session:SessionStorageService) { }
  getUserDetails(phone: string): Observable<any> {
    const url = `${this.baseUrl}/${phone}`;
    return this.http.get(url);
  }
  getAllUserDetails():Observable<any>
  {
    const url=`${this.baseUrl}/userDetails`;
    return this.http.get(url);
  }
  // You can add more methods for authentication, user data, etc., if needed.

  logout() {
    localStorage.removeItem('data');
    this.session.removeItem('examplekey');
    this.router.navigate(['/home']);
  }
 

  
}
