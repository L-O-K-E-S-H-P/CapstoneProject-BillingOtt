import { FormBuilder,FormGroup,NgForm,Validators } from '@angular/forms';
import { Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyUser } from '../MyUser';

import { ThisReceiver } from '@angular/compiler';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  success:boolean=false;

  selectedProfileImage: File | null = null;
  signupForm:FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.signupForm = this.formBuilder.group({
      username: ['', Validators.required],
      phone:['',Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address:['',Validators.required]
    });
  }
  onFileSelected(event: any) {
    // Retrieve the selected file from the event
    const files = event.target.files;
    if (files.length > 0) {
      this.selectedProfileImage = files[0];
    }
  }

  get usernameInvalid() {
    return this.signupForm.get('username')?.invalid && this.signupForm.get('username')?.touched;
  }
  get phoneInvalid() {
    this.signupForm.get('phone')?.invalid && this.signupForm.get('phone')?.touched;
    const phoneControl = this.signupForm.get('phone');
  
    if (phoneControl?.value) {
      const phonePattern = /^[0-9]{10}$/; // Matches a 10-digit numeric phone number
      return !phonePattern.test(phoneControl.value);
    }
    
    return false;
  }
  get emailInvalid() {
    return (
      this.signupForm.get('email')?.invalid &&
      (this.signupForm.get('email')?.touched || this.signupForm.get('email')?.dirty)
    );
  }

  user:MyUser|undefined;
onSubmit() {
  // Proceed with submitting the formData to the server or perform other actions.
  this.user = new MyUser("assets/images/"+this.selectedProfileImage?.name,this.signupForm.get('username')?.value,this.signupForm.get('phone')?.value,this.signupForm.get('email')?.value,this.signupForm.get('address')?.value); 
  console.log(this.user.profileImageUrl+"  "+this.user.username)
  this.success=true
  this.http.post('http://localhost:8200/user/register', this.user).subscribe(
      (response) => {
        // Handle successful response from the backend
        console.log('Form data sent successfully:', response);
        // You can redirect to a success page or perform other actions here
      },
      (error) => {
        // Handle errors from the backend
        console.error('Error sending form data:', error);
      }
    );
    
  } 
  




  
}
