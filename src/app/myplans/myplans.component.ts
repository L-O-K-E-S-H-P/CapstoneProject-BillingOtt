import { Component, OnInit } from '@angular/core';
import { PlanService } from '../plan.service';
import { Plan } from '../myplan/Plan';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-myplans',
  templateUrl: './myplans.component.html',
  styleUrls: ['./myplans.component.scss']
})
export class MyplansComponent implements OnInit {
  selectedPlans: Plan[] = []; // Define an array to store the received plans
 

  constructor(private planService: PlanService,private http:HttpClient) { 
    
  }

  payInvoice(userPlanId: number) {
    this.planService.payInvoice(userPlanId).subscribe(
      (response) => {
       
      },
      (error) => {
        
      }
    );
  }
  printInvoice(userPlanId:number)
  {

  }
  downloadFile(plan:any) {
    const url="http://localhost:8200/pdf/download"
    const headers = new HttpHeaders();
    headers.set('Authorization', 'Bearer YourAccessToken');

    // Create an object with the request parameters
    const params = new HttpParams()
    .set('userPlanId', plan.userPlanId)
    .set('price', plan.price.toString())
    .set('planName', plan.planName.toString())


    // Send a GET request to the backend to download the PDF
    this.http.get(url, { params, headers, responseType: 'arraybuffer' })
      .subscribe((data: any) => {
        const blob = new Blob([data], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        window.open(url);
      }, (error) => {
        console.error('PDF download failed', error);
      });
}


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