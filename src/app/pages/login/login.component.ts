import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/models';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error:any
  user: SocialUser;
  loggedIn: boolean;

  constructor(
    private router : Router,
    private userService:UserService,
    private authService: SocialAuthService,
    private _snackBar: MatSnackBar
  ){}

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.userService.login(user);
      this.router.navigate(['/'])
      this._snackBar.open(`Signed as ${user.name}`, "OK",{
        duration: 3000
      })
      console.log(this.userService.getUser())
    });
    this.userService.loggedIn.subscribe(val=>this.loggedIn=val)
  }
  
}
