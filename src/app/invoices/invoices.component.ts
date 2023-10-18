import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CsvServiceService } from '../csv-service.service';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent {
  isPaid: boolean = false;
  togglePayment(row: any) {
    row.isPaid = !row.isPaid;
  }

  private apiUrl = 'http://localhost:8200/user';
  private userId = 1;
  message: string = '';
  isServicesActive: boolean = true;
  constructor(private http: HttpClient,private csvService:CsvServiceService) {}

  toggleServices(userId:string,isPaid:boolean) {
    console.log(userId);
    if (isPaid) {
      this.http.put(`${this.apiUrl}/${userId}/resume`, {}).subscribe(
        (response) => {
          this.message = 'Services resumed successfully';
        },
        (error) => {
          this.message = 'Error resuming services';
        }
      );
    } else {
      this.http.put(`${this.apiUrl}/${userId}/terminate`, {}).subscribe(
        (response) => {
          this.message = 'Services terminated successfully';
        },
        (error) => {
          this.message = 'Error terminating services';
        }
      );
    }
  }




  invoiceData:any = []; // This will hold the JSON data

  cleanField(field: string): string {
    return field.replace(/"/g, '');
  }

  ngOnInit(): void {
    console.log("invoice")
    this.csvService.getInvoices().subscribe(
      (data: any) => {
        this.invoiceData = data; // Assign the fetched JSON data to your component property.
        console.log(this.invoiceData[1]);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
      
 
  
  }

}
