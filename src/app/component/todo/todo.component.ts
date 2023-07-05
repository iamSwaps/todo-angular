import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoService } from 'src/app/shared/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input()
  todo:any

  @Output()
  refresh=new EventEmitter()

  deleting=false;

  deleteTodo(){
    this.deleting=true;
    this.todoService.deleteTodo(this.todo._id).subscribe(()=>{
      console.log(this.todo.todo+" (Deleted)")
      this.deleting=false;
      this.refresh.emit()
    })
  }

  completeTodo(){
    this.todoService.completeTodo(this.todo).subscribe(()=>{
      console.log(this.todo.todo+" (completed)")
    })
  }

  ngOnInit(): void {
      
  }
  constructor(
    private todoService:TodoService,
  ){}
}
