import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  list=[{
    number:'1',
    name:'Home',route: '/home',
    icon:"fa-solid fa-home"},{
        number:'7',
        name:'LinkFamily',route: '/link',
        icon:"fa-solid fas fa-file-alt"},{
        number:'3',
        name:'View Plans',route: '/plans',
        icon:"fa-solid fas fa-file-alt"},{
          number:'4',
          name:'Pay Bill',route: '/paybill',
          icon:"fa-solid fa-money-bill"},{
            number:'5',route: '/aboutus',
            name:'About Us',
            icon:"fa-solid fa-info"},
            {
              number:'6',route: '/support',
              name:'SUPPORT',
              icon:"fa-solid fa-users"}]
  @Input() sideNavStatus:boolean=false;
}
