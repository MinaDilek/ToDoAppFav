import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { TodosDetailComponent } from './todos-detail/todos-detail.component';
import { TodosComponent } from './todos/todos.component';
import { UserTodosComponent } from './user-todos/user-todos.component';

const routes: Routes = [
  { path: "", pathMatch: "full", component: TodosComponent },
  { path: "todos", component: TodosComponent },
  { path: "userTodos/:userId", component: UserTodosComponent },
  { path: "todosDetail/:id", component: TodosDetailComponent },
  { path: "favourites", component: FavouriteComponent},
  { path: "albums", component: AlbumsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
