import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './shared/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  isLogin:boolean;
  constructor(
    private router : Router,
    private userService:UserService,
  ){}

  ngOnInit(): void {
      this.userService.loggedIn.subscribe(value=>this.isLogin=value)
  }


  

  home(){
    this.router.navigate(['/'])
  }
  signin():void{
    this.router.navigate(['/signin'])
  }
  
}
