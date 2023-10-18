import { Component } from '@angular/core';
import { PlanService } from '../plan.service';
import { RouteConfigLoadEnd, Router } from '@angular/router';
import { UserPlanData } from './userPlanData';

@Component({
  selector: 'app-usermobile',
  templateUrl: './usermobile.component.html',
  styleUrls: ['./usermobile.component.scss']
})
export class UsermobileComponent {
  getPlan:any;
  constructor(private planService:PlanService){
    this.planService.getMobilePlans().subscribe((data)=>{console.log(data);
      localStorage.setItem("plans",JSON.stringify(data))
      this.getPlan=data;
    });
      
  }

 
  userPlanData:UserPlanData=new UserPlanData(0,0,"","");

  selectPlan(plan: any) {
    const userId = this.primaryAccount.id; // Get userId from primaryAccount
    const planId = plan.planId; // Get planId from the selected plan
    const planName=plan.planName;
    const price = plan.price; // Get price from the selected plan
    const username=this.primaryAccount.username;
    const email=this.primaryAccount.email;
    const phone=this.primaryAccount.phone;
   
    const userPlanData = {
      userId: userId,
      planId: planId,
      planName:planName,
      price: price,
      username:username,
      email:email,
      phone:phone
    };
    this.planService.addSelectedPlan(userPlanData).subscribe(
      response => {
        console.log('Request was successful:', response);
      },
      error => {
        console.error('Error:', error);
      }
    );
  }
  primaryAccount:any
  ngOnInit()
  {
    this.getPlan=localStorage.getItem("plans");
    const storedData = localStorage.getItem("userdata");
    if (storedData) {
      this.primaryAccount = JSON.parse(storedData);
      console.log("Primary Account", this.primaryAccount);
    }
    
  }




}
