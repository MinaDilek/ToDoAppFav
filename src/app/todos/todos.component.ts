import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [];

  loading:boolean=true

  constructor(private todoService: TodosService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(data => this.todos = data);
    this.loading=false
  }
}
