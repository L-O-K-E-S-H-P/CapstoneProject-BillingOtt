import { Component } from '@angular/core';


@Component({
  selector: 'app-paybill',
  templateUrl: './paybill.component.html',
  styleUrls: ['./paybill.component.scss']
})
export class PaybillComponent {
  paymentMessage: string = 'Pay The Bill'; // This variable will hold the payment message

  showLoading(event: Event) {
    event.preventDefault(); // Prevent form submission
    this.paymentMessage = 'Processing Payment...';

    setTimeout(() => {
      this.paymentMessage = 'Payment completed.';
    }, 3000); // Change to the desired duration in milliseconds
  }

}
