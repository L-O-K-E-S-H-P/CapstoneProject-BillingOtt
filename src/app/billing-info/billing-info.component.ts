import { Component, OnInit } from '@angular/core';
import { CsvServiceService } from '../csv-service.service';
import { MyCsv } from '../MyUser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-billing-info',
  templateUrl: './billing-info.component.html',
  styleUrls: ['./billing-info.component.scss']
})
export class BillingInfoComponent implements OnInit {
  csvData: string = '';
  parsedCsvData: string[][]=[];
  mycsv:MyCsv|undefined


    // Your JSON data goes here
  constructor(private csvService: CsvServiceService) {}
  // ngOnInit(): void {
  //   this.csvService.getCsvData().subscribe((data: string) => {
  //     this.csvData = data;
  //     console.log(this.csvData);
  //     this.parseCsvData();
      
  //   },
  //   (error) => {
  //     console.error('Error fetching CSV data:', error);
  //   });
  // }
  private parseCsvData(): void {
    if (this.csvData) {
      this.parsedCsvData = this.csvData.split('\n').map(row => row.split('|').map(cell => cell.trim()));
    }
  }

  invoiceData:any = []; // This will hold the JSON data


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

 