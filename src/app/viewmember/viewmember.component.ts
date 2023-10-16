import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-viewmember',
  templateUrl: './viewmember.component.html',
  styleUrls: ['./viewmember.component.scss']
})
export class ViewmemberComponent implements OnInit{
  user:any
  constructor(private uService:UserServiceService){
   
  }
  AllMembers:any
  ngOnInit(): void {
    const storedData = localStorage.getItem("userdata");
    if (storedData) {
      this.AllMembers = JSON.parse(storedData);
      this.uService.getFamilyMembers(this.AllMembers.id).subscribe(
        (response) => {
          this.user = response;
          console.log('User Details:', this.user);
        },
        (error) => {
          console.error('hello');
        }
      );
  }
}

deleteFamilyMember(userId:number,memberId:number) {
  this.uService.deleteFamilyMember(userId,memberId).subscribe(
    (response) => {
      console.log('Family member deleted successfully:', response);
    },
    (error) => {
      console.error('Error deleting family member:', error);
    }
  );
}
}

