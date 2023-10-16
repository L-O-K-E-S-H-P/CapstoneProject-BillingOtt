import { Component } from '@angular/core';
import { PlanService } from '../plan.service';

@Component({
  selector: 'app-viewplan',
  templateUrl: './viewplan.component.html',
  styleUrls: ['./viewplan.component.scss']
})
export class ViewplanComponent {
  getOTTPlan:any;
  constructor(private planService:PlanService){
    this.planService.getOTTPlans().subscribe((data)=>{console.log(data);
      this.getOTTPlan=data;});
      console.log(this.getOTTPlan);
  }

   
}
