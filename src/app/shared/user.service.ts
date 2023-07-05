import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
 

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user:string='global'
  constructor() { }

  userChange(data:any){
    this.user=data
  }

  getUser(){
    return this.user
  }
}
