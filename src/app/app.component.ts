import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  constructor(
    private router : Router,
  ){}
  home(){
    this.router.navigate(['/'])
  }
  signin():void{
    this.router.navigate(['/signin'])
  }
  signup():void{
    this.router.navigate(['/signup'])  
  }
}
