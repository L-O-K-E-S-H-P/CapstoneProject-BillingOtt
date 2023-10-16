import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Status } from './Status';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) {}
  getUserData() {
    return this.http.get('/api/user-data');
  }
  generateOtp(phoneNumber:string)
  {
    const body={phoneNumber}
    return this.http.post('http://localhost:8200/requestotp',body)    
  }
  validateOtp(otp:string)
  {
    console.log("validate otp");
    return this.http.post<Status>('http://localhost:8200/validateotp',otp);
  }

  addAccount(accountData:any)
  {
    return this.http.post('http://localhost:8200/user/addmember',accountData);
  }
  getFamilyMembers(id:string)
  {
    return this.http.get(`http://localhost:8200/user/userid/${id}`)
  }

  deleteFamilyMember(userId:number,memberId:number)
  {
    return this.http.delete(`http://localhost:8200/user/${userId}/family-member/${memberId}`)
  }

}
