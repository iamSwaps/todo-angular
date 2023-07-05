import { Component } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  username:string='test1'

  constructor(
    private userService:UserService,
  ){}

  clicked(){
    this.userService.userChange(this.username)
  }
}
