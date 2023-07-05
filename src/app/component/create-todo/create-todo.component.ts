import { Component, EventEmitter, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms'
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TodoService } from 'src/app/shared/todo.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css'],
})
export class CreateTodoComponent {

  onSave=new EventEmitter();

  constructor(
    private dialogRef: MatDialogRef<CreateTodoComponent>,
    private todoService:TodoService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ){

  }

  createTodo=new FormGroup({
    username:new FormControl(this.data.username,[Validators.required]),
    todo:new FormControl(""),
    completed:new FormControl(false),
  })

  save(){
    console.log(this.createTodo)
    this.todoService.createTodoByUsername(this.createTodo.value).subscribe(()=>{
      this.onSave.emit()
      this.dialogRef.close()
    })
  }
  close(){
    this.dialogRef.close()
  }
}
