import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodosService } from '../services/todos.service';
import { Todo } from '../todos/todo';

@Component({
  selector: 'app-todos-detail',
  templateUrl: './todos-detail.component.html',
  styleUrls: ['./todos-detail.component.css']
})
export class TodosDetailComponent implements OnInit {

  todo: Todo = { 
                userId: 0,
                id: 0,
                title: "",
                completed: false
              }

  constructor(private todoService: TodosService, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => this.getTodoById(params["id"]));
  }

  getTodoById(id: number){
    this.todoService.getTodoById(id).subscribe(data => this.todo = data);
  }

}
