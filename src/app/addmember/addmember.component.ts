import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { UserServiceService } from '../user-service.service';
import { MemberData } from './MemberData';

@Component({
  selector: 'app-addmember',
  templateUrl: './addmember.component.html',
  styleUrls: ['./addmember.component.scss']
})
export class AddmemberComponent implements OnInit {

  memberdata: MemberData = new MemberData("", "", "")
  constructor(private uService: UserServiceService) { }
  user:any
  addAccount() {
    this.newAccount.accountId = this.primaryAccount.id;
    this.newAccount.familMemberList.push(this.memberdata)

    this.uService.addAccount(this.newAccount).subscribe((response) => {
      console.log("account added successfully", response)
      
    },
      (error) => {
        // Handle any errors that occur during the API request
        console.error('Error adding account:', error);
        Swal.fire({
          title: 'Account NOT Added!',
          text: 'Maximum 4 members ALready exists',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      });
  }
  showSweetAlert() {
    Swal.fire({
      title: 'Account Added!',
      text: 'Your account has been successfully added.',
      icon: 'success',
      confirmButtonText: 'OK'
    });
  }
  
  isContentVisible = false;
  name: string = ""
  mobile: string = "";
  email: string = "";
  toggleContent() {
    this.isContentVisible = !this.isContentVisible;
  }

  generateOTP(type: string) {
    // Implement OTP generation logic based on 'type' (e.g., 'mobile' or 'email')
    if (type === 'mobile') {
      // Generate OTP for mobile
      console.log('Generating OTP for mobile:', this.mobile);
    } else {
      // Generate OTP for email
      console.log('Generating OTP for email');
    }
  }
  otp!: string;
  otp1: number = 123456

  inputDigitLeft: string = "Verify code";
  btnStatus: string = "btn-light";

  public configOptions = {
    length: 4,
    inputClass: 'digit-otp',
    containerClass: 'd-flex justify-content-between'
  }
  Otp = false

  optPage() {
    this.Otp = true;
  }
  onOtpChange(event: any) {
    let newotp: number = 0;
    this.otp = event;
    if (this.otp.length < this.configOptions.length + 1) {
      this.inputDigitLeft = this.configOptions.length - this.otp.length + " digits Left";
      this.btnStatus = 'btn-light';
      newotp = parseInt(this.otp)
    }

    if (this.otp.length == this.configOptions.length) {
      if (newotp == this.otp1) { console.log("success") }
      this.inputDigitLeft = "Add";
      this.btnStatus = 'btn-primary';

    }
  }

  primaryAccount: any;

  ngOnInit(): void {

    const storedData = localStorage.getItem("userdata");
    if (storedData) {
      this.primaryAccount = JSON.parse(storedData);
      console.log("Primary Account", this.primaryAccount);
    }
  }


  primaryAccountNumber: string = '1234567890';
  secondaryAccounts: any[] = [];
  showSecondaryAccountForm: boolean = false;

  familMemberList: MemberData[]=[]

  newAccount = {
    accountId: '',
    familMemberList: this.familMemberList
  };

  

  togglePrimary() {
    // Toggle logic for making primary account secondary
  }

  makePrimary(index: number) {
    // Logic for making a secondary account primary
  }

  addSecondaryForm() {
    this.showSecondaryAccountForm = true;
  }

  addSecondary() {
    if (this.secondaryAccounts.length < 4) {
      console.log(this.newAccount);
      this.secondaryAccounts.push(this.newAccount);
      // this.newAccount = { accountNumber: '', name: '', email: '', phone: '' };
      this.showSecondaryAccountForm = false;
    }
  }




}
