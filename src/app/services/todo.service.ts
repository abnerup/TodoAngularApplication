import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }
  baseApiUrl:string = "https://localhost:7155/api/Todo";

  getAllTodos(): Observable<Todo[]>{
    return this.http.get<Todo[]>(this.baseApiUrl);
  }

  addTodo(newTodo:Todo): Observable<Todo>{
    newTodo.id = "00000000-0000-0000-0000-000000000000";
    return this.http.post<Todo>(this.baseApiUrl,newTodo);
  }
  updateTodo(id:string, newTodo:Todo): Observable<Todo>{
    return this.http.put<Todo>(this.baseApiUrl +"/"+ id,newTodo);
  }
  deleteTodo(id:string): Observable<Todo>{
    return this.http.delete<Todo>(this.baseApiUrl +"/"+ id);
  }

}
