import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor() { }
  setItem(key:string,value:any): void {

    sessionStorage.setItem(key,JSON.stringify(value));

  }

  islogined():boolean{
    return !!this.getItem('examplekey');
  }

 

  getItem(key:string): any{

    const storedvalue = sessionStorage.getItem(key);

    return storedvalue ? JSON.parse(storedvalue) : null;

  }

 

  removeItem(key:string): void {

    sessionStorage.removeItem(key);

  }
  
}
