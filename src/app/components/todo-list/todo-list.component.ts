import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MyDataService } from '../../../servies/myData.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Output() updateListFromList = new EventEmitter<any>();
  @Input() todoList;

  // todoList;
  constructor(private MyDataService: MyDataService) { }

  // מעביר את המידע לפונקצי אב
  updateTodos(data) {
    console.log("dat from list=> ", data);
    this.updateListFromList.emit(data)
  }

  ngOnInit() {
    // this.MyDataService.getAll().subscribe(
    //   data => {
    //     // this.todoList = data;
    //     console.log(data);
    //   }
    // )
  }

}
