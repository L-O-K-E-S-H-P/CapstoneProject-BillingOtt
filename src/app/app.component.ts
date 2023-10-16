import { Component } from '@angular/core';
import { AuthServiceService } from './auth-service.service';
import { UserServiceService } from './user-service.service';
import { DataServiceService } from './data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ott-services';
  // sideNavStatus:boolean=false;
  // directTo:string = 'home';

  // onReceive( goto:string){
  //   this.directTo = goto;
  // }
  userData: any; // Store user data fetched from the server.

  constructor(private authService: AuthServiceService, private userService: UserServiceService,private dataService: DataServiceService) {}

  
}
