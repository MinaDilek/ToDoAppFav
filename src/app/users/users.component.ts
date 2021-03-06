import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from './user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [];

  loading:boolean=true

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => this.users = data);
    this.loading=false
  }

}
