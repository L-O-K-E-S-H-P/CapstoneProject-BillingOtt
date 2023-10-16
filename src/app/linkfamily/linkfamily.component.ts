import { Component } from '@angular/core';

@Component({
  selector: 'app-linkfamily',
  templateUrl: './linkfamily.component.html',
  styleUrls: ['./linkfamily.component.scss']
})
export class LinkfamilyComponent {
  mobileNumbers: string[] = ['6379174584'];
  newMobileNumbers: string = '';

  addMobileNumber(index: number): void {
    this.mobileNumbers.splice(index + 1, 0, '');
  }

  removeMobileNumber(index: number): void {
    if (this.mobileNumbers.length > 1) {
      this.mobileNumbers.splice(index, 1);
    }
  }

  addMultipleMobileNumbers(): void {
    const numbersToAdd = this.newMobileNumbers.split('\n');
    for (const number of numbersToAdd) {
      if (number.trim() !== '') {
        if (this.mobileNumbers.length < 11) {
          this.mobileNumbers.push(number.trim());
        } else {
          alert('You can only add up to 10 mobile numbers.');
          break;
        }
      }
    }
    this.newMobileNumbers = '';
  }
}




