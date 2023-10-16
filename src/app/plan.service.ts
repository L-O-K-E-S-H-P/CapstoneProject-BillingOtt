import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Plan } from './myplan/Plan';

@Injectable({
  providedIn: 'root'
})
export class PlanService {
  private baseUrl = 'http://localhost:8200/plans'; 
  constructor(private router: Router,private  http: HttpClient) { }
  getMobilePlans() {
    return this.http.get(`${this.baseUrl}/Mobile Plan`);
  }

  getOTTPlans() {
    return this.http.get(`${this.baseUrl}/OTT Plan`);
  }


  addSelectedPlan(userPlanData:any) {
    return this.http.post('http://localhost:8200/userplans',userPlanData);
  }

  getSelectedPlans(userId:number) {
    return this.http.get<Plan[]>(`http://localhost:8200/userplans/by-user/${userId}`)
  }


}

