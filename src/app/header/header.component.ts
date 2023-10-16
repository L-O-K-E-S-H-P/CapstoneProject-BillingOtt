import { Component, EventEmitter,OnInit, Output } from '@angular/core';
import { SessionStorageService } from '../session-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  @Output() sideNavToggled=new EventEmitter<boolean>();
  menuStatus:boolean=false;
  constructor(public session: SessionStorageService)
  {}
  ngOnInit(): void {
    
  }
  SideNavToggle()
  {
    this.menuStatus=!this.menuStatus;
    this.sideNavToggled.emit(this.menuStatus);
  }
  @Output() goto = new EventEmitter<string>();
  directTo:string = 'home';
  onClickLogin(){
    this.goto.emit('user');
  }
  

}
