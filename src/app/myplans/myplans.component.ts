import { Component, OnInit } from '@angular/core';
import { PlanService } from '../plan.service';
import { Plan } from '../myplan/Plan';

@Component({
  selector: 'app-myplans',
  templateUrl: './myplans.component.html',
  styleUrls: ['./myplans.component.scss']
})
export class MyplansComponent implements OnInit {
  selectedPlans: Plan[] = []; // Define an array to store the received plans

  constructor(private planService: PlanService) { }

  
    primaryAccount:any
    ngOnInit() {
      const storedData = localStorage.getItem("userdata");
      if (storedData) {
        this.primaryAccount = JSON.parse(storedData);
        console.log("Primary Account", this.primaryAccount);
      }
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

  
}