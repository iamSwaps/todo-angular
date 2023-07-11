import { SocialUser } from '@abacritt/angularx-social-login';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
 

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user:SocialUser;
  public loggedIn=new BehaviorSubject<boolean>(false);
  constructor() { }

  

  public login(data:SocialUser){
    this.user=data
    this.loggedIn.next(true)
    return this.loggedIn
  }

  public logout(){
    this.loggedIn.next(false)
    this.user=new SocialUser()
    return this.loggedIn
  }


  public getUser(){
    if(!this.user){
      let global=new SocialUser()
      global.email='global'
      return global
    }
    return this.user
  }
}
