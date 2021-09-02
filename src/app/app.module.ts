import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { TodosComponent } from './todos/todos.component';
import { UserTodosComponent } from './user-todos/user-todos.component';
import { TodosDetailComponent } from './todos-detail/todos-detail.component';
import { NaviComponent } from './navi/navi.component';
import { AlbumsComponent } from './albums/albums.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FavouriteDetailComponent } from './favourite-detail/favourite-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    TodosComponent,
    UserTodosComponent,
    TodosDetailComponent,
    NaviComponent,
    AlbumsComponent,
    FavouriteComponent,
    FavouriteDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({positionClass: "toast-bottom-right"})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
