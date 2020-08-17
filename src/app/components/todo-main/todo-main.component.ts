import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MyDataService } from '../../../servies/myData.service';

@Component({
  selector: 'app-todo-main',
  templateUrl: './todo-main.component.html',
  styleUrls: ['./todo-main.component.scss']
})
export class TodoMainComponent implements OnInit {
  todoList;

  constructor(private MyDataService: MyDataService) { }

  ngOnInit() {
    this.MyDataService.getAll().subscribe(
      data => {
        this.todoList = data;
        console.log(data);
      }
    )
  }
// כול עידכון שיש   מגיע לכאן
//  אחיר שישי קראיה בשרת
// כדי לעדכן את שאר הדפים
  updateList($event) {
    console.log("updet from main=> ", $event);
    this.todoList = $event
  }
}
