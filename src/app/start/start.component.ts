import { Component } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent {
  sideNavStatus:boolean=false;
  directTo:string = 'home';

  onReceive( goto:string){
    this.directTo = goto;
  }


}
