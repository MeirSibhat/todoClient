import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule}  from '@angular/common/http';
import { AppComponent } from './app.component';
import{FormsModule} from '@angular/forms/'
import {HeaaderComponent } from './components/heaader/heaader.component'
import { TodoItemComponent} from './components/todo-item/todo-item.component'
import {TodoListComponent} from './components/todo-list/todo-list.component'
import { TodoMainComponent} from './components/todo-main/todo-main.component'
import { MyDataService}  from '../servies/myData.service';


import { TodoItem2Component} from './components/todo-item2/todo-item2.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaaderComponent,
    TodoItemComponent,
    TodoMainComponent,
    TodoListComponent,
    TodoItem2Component


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [MyDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
