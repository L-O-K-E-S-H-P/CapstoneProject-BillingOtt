import { Component } from '@angular/core';
import { PlanService } from '../plan.service';

@Component({
  selector: 'app-mobileplans',
  templateUrl: './mobileplans.component.html',
  styleUrls: ['./mobileplans.component.scss']
})
export class MobileplansComponent {

  getPlan:any;
  constructor(private planService:PlanService){
    this.planService.getMobilePlans().subscribe((data)=>{console.log(data);
      this.getPlan=data;});
      console.log(this.getPlan);
  }

}
