import { Component } from '@angular/core';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent {

  faqs = [
    {
      question: 'What is the Family Mobile account hierarchy in this project?',
      answer: 'The project implements a customer account hierarchy known as the B2C Family account. This account can have 4 to 5 mobile services grouped under a single billing account.',
      expanded: false,likes:0
    },
    {
      question: ' How are third-party services like Disney Hotstar and Netflix integrated into the billing account?',
      answer: 'Third-party services like Disney Hotstar and Netflix are integrated into the billing account through 3rd party API stubs. These services are associated with the billing account, and their subscription details are managed.',
      expanded: false,likes:0
    },
    {
      question: 'How does the monthly billing process work for customers?',
      answer: 'Every month, the 3rd party provider sends a bulk B2C invoice containing details of around 100 customer IDs. This invoice is processed on the billing account, and invoices are generated for individual users, which are then sent via email.',
      expanded: false,likes:0
    },
    {
      question: 'Can users view their invoices on the app?',
      answer: 'Yes, users can view their invoices on the app. The app provides a feature to access and review their monthly invoices.',
      expanded: false,likes:0
    },
    {
      question: 'Can users resume their services after making a delayed payment?',
      answer: 'Yes, users can make a payment even after services have been disrupted. Once the payment is made, the services will be resumed.',
      expanded: false,likes:0
    },
    {
      question: ' How can users pay their bills?',
      answer: ' Users can pay their bills through the app. They can select the payment option, enter the necessary details, and make the payment for the total bill amount.',
      expanded: false,likes:0
    },
    {
      question: 'What happens if a user doesnot make a payment on time?',
      answer: ' if a user fails to make the payment on time, their services may be disrupted. The services associated with the billing account could be temporarily suspended.',
      expanded: false,likes:0
    }
  ];
  
  likeFaq(faqItem: { likes: number; }) {
    // Increment the likes count for the specific FAQ item
    faqItem.likes++;
  }

  

  toggleFaq(faq: { expanded: boolean; }) {
    faq.expanded = !faq.expanded;
  }
}
