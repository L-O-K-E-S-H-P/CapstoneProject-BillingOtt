import { Component } from '@angular/core';
import { PlanService } from '../plan.service';
import { timer } from 'rxjs';
import { UserPlanData } from '../usermobile/userPlanData';

@Component({
  selector: 'app-userplan',
  templateUrl: './userplan.component.html',
  styleUrls: ['./userplan.component.scss']
})
export class UserplanComponent {
  getOTTPlan:any;
  constructor(private planService:PlanService){
   
      this.planService.getOTTPlans().subscribe((data)=>{console.log(data);
        localStorage.setItem("ottplans",JSON.stringify(data))
        this.getOTTPlan=data;});
        console.log(this.getOTTPlan); 
  }

  userPlanData:UserPlanData=new UserPlanData(0,0,"","");

  selectPlan(ottplan: any) {
    const userId = this.primaryAccount.id; // Get userId from primaryAccount
    const planId = ottplan.planId; // Get planId from the selected plan
    const planName=ottplan.planName;
    const price = ottplan.price; // Get price from the selected plan
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
    this.getOTTPlan=localStorage.getItem("ottplans");
    const storedData = localStorage.getItem("userdata");
    if (storedData) {
      this.primaryAccount = JSON.parse(storedData);
      console.log("Primary Account", this.primaryAccount);
    }
    
  }

}
