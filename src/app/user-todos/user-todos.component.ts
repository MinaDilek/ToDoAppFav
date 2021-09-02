import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodosService } from '../services/todos.service';
import { Todo } from '../todos/todo';

@Component({
  selector: 'app-user-todos',
  templateUrl: './user-todos.component.html',
  styleUrls: ['./user-todos.component.css']
})
export class UserTodosComponent implements OnInit {

  todos: Todo[] = [];

  constructor(private todoService: TodosService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => this.getTodosByUserId(params["userId"]));
  }

  getTodosByUserId(userId: number){
    this.todoService.getTodosByUserId(userId).subscribe(data => this.todos = data);
  }

}
