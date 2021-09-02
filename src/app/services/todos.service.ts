import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../todos/todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  apiUrl: string = "http://localhost:3000/todos";

  constructor(private httpClient: HttpClient) { }

  getTodos():Observable<Todo[]>{
    return this.httpClient.get<Todo[]>(this.apiUrl);
  }

  getTodoById(id:number):Observable<Todo>{
    return this.httpClient.get<Todo>(this.apiUrl + "/" +id);
  }

  getTodosByUserId(userId: number):Observable<Todo[]>{
    return this.httpClient.get<Todo[]>(this.apiUrl + "?userId=" + userId);
  }
}
