import { Component, EventEmitter, Output,OnChanges, SimpleChanges } from '@angular/core';
import { timer } from 'rxjs';
import { Observable, Observer } from 'rxjs';
import {

  FormControl,

  FormGroupDirective,

  NgForm,
  Validators,

} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Login } from './Login';
import { Status } from '../Status';
import { DataServiceService } from '../data-service.service';
import { SessionStorageService } from '../session-storage.service';
import { UserServiceService } from '../user-service.service';
import Swal from 'sweetalert2';
export interface ExampleTab {
  

  label: string;

  content: string;
  

}

 

export class MyErrorStateMatcher implements ErrorStateMatcher {


  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {

    const isSubmitted = form && form.submitted;

    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));

  }

}

 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {  
  asyncTabs: Observable<ExampleTab[]>;
 

  otp!:string;

  
  inputDigitLeft: string = "Verify code";
  btnStatus: string = "btn-light";
  

  public configOptions = {
    length: 6,
    inputClass: 'digit-otp',
    containerClass: 'd-flex justify-content-between'
  }
  userDetails:any;
  
  ngOnInit() {
    // Check if user data is in session storage
    const storedUserData = sessionStorage.getItem('userData');
    if (storedUserData) {
      // Parse the stored JSON data
      const userData = JSON.parse(storedUserData);
  
      // Populate the view with the stored data
      // For example, set it in your component properties
      this.userDetails = userData;
      console.log(userData);
    }
  }
  

  Otp=false
  optPage(){
    if(this.inputText)
    {
      console.log(this.inputText);
      this.userService.generateOtp(this.inputText).subscribe();      
    }

    this.Otp=true;
  }
  onOtpChange(event: any) {
    this.otp = event;
    if(this.otp.length < this.configOptions.length+1) {
      this.inputDigitLeft = this.configOptions.length - this.otp.length + " digits Left";
      this.btnStatus = 'btn-light';
    }

    if(this.otp.length == this.configOptions.length) {
      this.inputDigitLeft = "Login!";
      this.btnStatus = 'btn-primary';

    }
  }
  constructor(private authService:AuthServiceService,private route:Router,private http: HttpClient,private dataService:DataServiceService, private session: SessionStorageService,private userService:UserServiceService) {

    this.asyncTabs = new Observable((observer: Observer<ExampleTab[]>) => {

      setTimeout(() => {

        observer.next([
          { label: 'First', content: 'Content 1' },
          { label: 'Second', content: 'Content 2' },
          { label: 'Third', content: 'Content 3' },
        ]);
      }, 1000);

    });

  }
 checkmsg:any;
  isUserPhoneNumber: boolean=false;
  checkPhoneNumber(): void {
    console.log("from the validate otp");
    console.log(this.otp);
    const enteredOtp = this.otp;
    this.userService.validateOtp(this.otp).subscribe((msg)=>{
      this.checkmsg=msg;
      console.log("this is check msg"+this.checkmsg.status);
      
      timer(1000).subscribe(()=>{
        console.log("from the validate otp funciton"+this.checkmsg.status);
      if (this.checkmsg.status === 'validated')
      {
        console.log(this.inputText+'  this it the mobile of user');
        console.log('user validated');
        if (this.inputText==='6379174583'){
          Swal.fire(
            'You are Logged in Successfully',

            '',

            'success'

          )
          this.session.setItem('examplekey','examplevalue');
          this.route.navigate(['/adminpage']);

        }

        else {
          Swal.fire(

            'You are Logged in Successfully',

            '',

            'success'

          )
          this.session.setItem('examplekey','examplevalue');
          this.route.navigate(['/user']);
        }

       

        // this.otpValidated = true; // OTP has been validated successfully

      }

      else

      {

        console.log('wrong otp');

        Swal.fire({

          icon:'error',

          title:'Wrong OTP Yaar',

          text:'Enter correct OTP',

          footer:'Back to login'

        })

        // this.otpValidated = false; // OTP validation failed

      }

      })

     

   

    });

    // timer(2000).subscribe(()=>{
    //   console.log(this.checkmsg.checkcustomer);
    // })

 

 
    // const phoneNumber = this.phoneNumberFormControl.value;
    // console.log(phoneNumber);
    // if(phoneNumber == '9379174584'){

    //   this.session.setItem('examplekey','examplevalue');
    //   this.route.navigate(['/adminpage']);
    // }
    // else{
    //   this.session.setItem('examplekey','examplevalue');
    //   this.route.navigate(['/user']);
    // }
  }
  
userdata:any


  onSubmit() {
    const phone = this.inputText;
    console.log(this.inputText);
    this.authService.getUserDetails(phone).subscribe((data)=>{console.log(data);
      localStorage.setItem("userdata", JSON.stringify(data));

    },
    (error) => {
      // Handle any errors here
      console.error(error);
    }
  );  
    } 

  
  otpFormControl = new FormControl('', [Validators.required]);
  phoneNumberError = false;

  phoneNumberFormControl = new FormControl();

  phoneNumberValue = "";

  // phoneNumberFormControl = new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]);

  errorText = "";

 

  errorMessage = "Please enter a valid 10 digit phone number";

  phoneNumberErrorExists() {

    if (this.phoneNumberFormControl.value == null) {

      this.phoneNumberError = true;

      this.errorText = "";

      return true;

    }

    else if (this.phoneNumberFormControl.value != null) {

      let isInteger = ((this.phoneNumberFormControl.value != null) &&

        (this.phoneNumberFormControl.value !== '') &&

        !isNaN(Number(this.phoneNumberFormControl.value.toString())));

      if (this.phoneNumberFormControl.value.length == 0) {

        this.phoneNumberError = true;

        this.errorText = "Phone Number is required";

        return true;

      }

      else if (!isInteger) {

        this.phoneNumberError = true;

        this.errorText = "Please enter a valid phone number";

        return true;

      }

      else if (this.phoneNumberFormControl.value[0] != '9' && this.phoneNumberFormControl.value[0] != '8' && this.phoneNumberFormControl.value[0] != '7' && this.phoneNumberFormControl.value[0] != '6') {

        this.phoneNumberError = true;

        this.errorText = "Value should start with 9 8 7 or 6";

        return true;

      }

      else if (this.phoneNumberFormControl.value.length != 10) {

        this.phoneNumberError = true;

        this.errorText = "Value should be a 10 digit number";

        return true;

      }
      else if(this.isPhoneNumberInDatabase==false){
        this.errorText="it is not a post paid number";
        return true;

      }

      else {

        this.phoneNumberError = false;

        this.errorText = " ";

        return false;

      }

    }

    this.errorText = " ";

    this.phoneNumberError = false;

    return false;

  }

  submit() {

    console.log("phoneNumberFormControl.value", this.phoneNumberFormControl.value);

  }

  matcher = new MyErrorStateMatcher();

  logInputText() {
    // Log the inputText value to the console
    if(this.inputText.length==10)
    {
    console.log(this.inputText);
    }
  }
  inputText: string = '';
  phoneNumberStatus: Status|undefined;
  isPhoneNumberInDatabase: boolean = false;
  isPostpaid: boolean = false; // Flag for postpaid status
  checkPhoneNumberInDatabase() {
      if (this.inputText.length === 10) {
        console.log(this.inputText);
        const url = `http://localhost:8200/user/checknumber?number=${this.inputText}`;
        console.log(url);
  
        this.http.get<Status>(url).subscribe(
          (response) => {
            console.log(response);
            this.phoneNumberStatus = response;
            console.log('Phone number status:', this.phoneNumberStatus);
            if (response.status == 'success') {
              this.isPhoneNumberInDatabase = true;
              this.isPostpaid = true; // Set to true if found in the database (postpaid)
            } else if(response.status === 'Fail') {
              console.log(2);
              this.isPhoneNumberInDatabase = false;
              this.isPostpaid = false; // Set to false if not found in the database (not postpaid)
            }
          },
          (error) => {
            console.error('Error:', error);
          }
        );
      }
    }
  }
    








