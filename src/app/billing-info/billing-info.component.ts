import { Component, OnInit, ViewChild } from '@angular/core';
import { CsvServiceService } from '../csv-service.service';
import { MyCsv } from '../MyUser';
import { HttpClient } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-billing-info',
  templateUrl: './billing-info.component.html',
  styleUrls: ['./billing-info.component.scss']
})
export class BillingInfoComponent implements OnInit {
  csvData: string = '';
  parsedCsvData: string[][]=[];
  mycsv:MyCsv|undefined
 
  sendEmail(
    email: string,
    username: string,
    price: string,
    activation_date: string,
    expiry_date: string,
    plan_name: string,
    phone: string
  ): void {
    // Create an object with the data you want to send to the backend
    const emailData = {
      email: email,
      username: username,
      price: price,
      activation_date: activation_date,
      expiry_date: expiry_date,
      plan_name: plan_name,
      phone: phone
    };
    
  
    // Make an HTTP POST request to send the data to the backend
    this.http.post('http://localhost:8201/admin', emailData).subscribe(
      (response) => {
        console.log('Email sent successfully:', response);
        // Handle any success logic here
      },
      (error) => {
        console.error('Email sending failed:', error);
        // Handle any error or failure here
      }
    );
  }
  constructor(private csvService: CsvServiceService,private http:HttpClient) {
    
  }
 
  
  
  
  
   
  private parseCsvData(): void {
    if (this.csvData) {
      this.parsedCsvData = this.csvData.split('\n').map(row => row.split('|').map(cell => cell.trim()));
    }
  }

  invoiceData:any = []; // This will hold the JSON data

  cleanField(field: string): string {
    return field.replace(/"/g, '');
  }

  ngOnInit(): void {
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

 