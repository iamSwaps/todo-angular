import { Injectable } from '@angular/core';
import { URI } from 'src/app/utils/app.constants';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../models';
import { SocialUser } from '@abacritt/angularx-social-login';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(
    private http:HttpClient
  ) { }
  

  public getAllTodos():Observable<any>{
    return this.http.get<any[]>(URI+'/todos')
  }

  public getTodosByUser(user:SocialUser):Observable<any>{
    return this.http.get<any[]>(URI+`/todos/${user.email}`)
  }

  public createTodoByUsername(data:any):Observable<any>{
    const todoOptions:Todo={
      username:data.username,
      todo:data.todo,
      completed:false
    }
    return this.http.post<any>(URI+`/todos`,todoOptions)
  }

  public deleteTodo(todoId:string):Observable<any>{
    return this.http.delete(URI+`/todos/${todoId}`)
  }

  public completeTodo(data:any):Observable<any>{
    const todoOptions={
      completed:data.completed
    }
    return this.http.put(URI+`/todos/${data._id}/completed`,todoOptions)
  }
}
