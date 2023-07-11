import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CreateTodoComponent } from 'src/app/component/create-todo/create-todo.component';
import { TodoService } from 'src/app/shared/todo.service';
import { UserService } from 'src/app/shared/user.service';
import { Todo } from 'src/app/models';
import { SocialUser } from '@abacritt/angularx-social-login';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @Input()
  user:SocialUser

  isLogin:boolean;
  isData=false;
  todos:Todo[]=[];
  snackBarCreateTodoMsg="Todo Added!"

  constructor(
    private userService:UserService,
    private todoService:TodoService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ){
    
  }

  refresh(){
    if(this.isLogin){
      this.getTodoForUser()
    }else{
      this.getAllTodos();
    }
    console.log(this.user)
  }
  
  ngOnInit(){
    this.userService.loggedIn.subscribe(val=>this.isLogin=val)
    this.initializeApp()
  }

  initializeApp(){
    this.user=this.userService.getUser()
    if(this.isLogin){
      this.getTodoForUser()
    }else{
      this.getAllTodos();
    }
    console.log(this.user)
  }


  getTodoForUser(){
    this.isData=false;
    this.todoService.getTodosByUser(this.user).subscribe((result)=>{
      this.todos=result;
      this.isData=true;
    })
  }

  getAllTodos(){
    this.isData=false;
    this.todoService.getAllTodos().subscribe((result)=>{
      this.todos=result;
      this.isData=true;
    })
  }
  
  createTodoDialog(): void {
    const dialogRef = this.dialog.open(CreateTodoComponent,
      {
        data:{
          user:this.user
        }
      });
    dialogRef.componentInstance.onSave.subscribe(()=>{
      this.refresh();
      this._snackBar.open(this.snackBarCreateTodoMsg, "OK",{
        duration: 3000
      })
    })
    dialogRef.afterClosed().subscribe(result => {
      
    });
  }

  
}
