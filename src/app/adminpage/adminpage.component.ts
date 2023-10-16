import { Component } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.scss']
})
export class AdminpageComponent {
 
  constructor(private authService: AuthServiceService) { }
  userName: string="lokesh";
  logout() {
    // Call the logout function from the AuthService.
    this.authService.logout();
  }
}
