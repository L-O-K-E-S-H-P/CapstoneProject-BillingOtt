import { Component, OnInit } from '@angular/core';
import { PlanService } from '../plan.service';
import { Plan } from './Plan';

@Component({
  selector: 'app-myplan',
  templateUrl: './myplan.component.html',
  styleUrls: ['./myplan.component.scss']
})
export class MyplanComponent implements OnInit{
  selectedPlans: Plan[] = []; // Define an array to store the received plans

  constructor(private planService: PlanService) {
    this.planService.getSelectedPlans(this.primaryAccount.id).subscribe(
      (response) => {
        this.selectedPlans = response; 
        console.log("Selected plans:", this.selectedPlans);
      },
      (error) => {
        console.error('Error fetching selected plans:', error);
      }
    );
  }

 
    primaryAccount:any
    ngOnInit() {
      const storedData = localStorage.getItem("userdata");
      if (storedData) {
        this.primaryAccount = JSON.parse(storedData);
        console.log("Primary Account", this.primaryAccount);

    }
 

}
}