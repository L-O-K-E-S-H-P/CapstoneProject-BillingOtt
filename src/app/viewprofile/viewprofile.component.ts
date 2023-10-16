import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { DataServiceService } from '../data-service.service';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.scss']
})
export class ViewprofileComponent implements OnInit {
  profileData: any;

  constructor(private authService: AuthServiceService,private dataService:DataServiceService,private userService:UserServiceService){
    
  }
  viewData: any;
  ngOnInit() {
    const storedData = localStorage.getItem("userdata");
    if (storedData) {
      this.viewData = JSON.parse(storedData);
      console.log(this.viewData);
    }
    // this.dataService.sharedData$.subscribe(data => {
    //   console.log(data);
    //   this.profileData = data;
    // });
    // console.log(this.profileData);
  
  
  }
  mobile: any;
  users: any;

 
  
}
