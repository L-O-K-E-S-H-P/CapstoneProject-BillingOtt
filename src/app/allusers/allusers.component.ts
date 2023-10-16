import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.scss']
})
export class AllusersComponent {
  getData:any
  constructor(private http:HttpClient,private authService:AuthServiceService)
  {
    this.authService.getAllUserDetails().subscribe((data)=>{console.log(data);
    this.getData=data;});
    console.log(this.getData);

  }
  
 

}
