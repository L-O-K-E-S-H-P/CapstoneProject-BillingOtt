import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { DataServiceService } from '../data-service.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  receivedData: any;
  constructor(private authService: AuthServiceService,private dataService:DataServiceService){
    
  } 
  logout() {
    this.authService.logout();
  }

  ngOnInit() {
    const storedData = localStorage.getItem("userdata");
    if (storedData) {
      this.receivedData = JSON.parse(storedData);
    }
    // this.dataService.sharedData$.subscribe(data => {
    //   this.receivedData = data;
    // });
  }
  
}
