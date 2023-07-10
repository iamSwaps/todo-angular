import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CreateTodoComponent } from 'src/app/component/create-todo/create-todo.component';
import { TodoService } from 'src/app/shared/todo.service';
import { UserService } from 'src/app/shared/user.service';
import { Todo } from 'src/app/models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @Input()
  username:any

  isData=false;
  todos:Todo[]=[];

  constructor(
    private userService:UserService,
    private todoService:TodoService,
    public dialog: MatDialog,
  ){
    
  }

  refresh(){
    this.getAllTodos();
    console.log(this.username)
  }
  
  ngOnInit(){
    this.getAllTodos();
    this.username=this.userService.getUser()
    console.log(this.username)

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
          username:this.username
        }
      });
    dialogRef.componentInstance.onSave.subscribe(()=>{
      this.refresh();
    })
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  
}
