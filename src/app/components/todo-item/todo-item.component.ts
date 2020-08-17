import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MyDataService } from '../../../servies/myData.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Output() updateListFromList = new EventEmitter<any>();
  @Input() todoItem;
  open: boolean = false

  constructor(public MyDataService: MyDataService) { }
  OnRemoveItem() {
    let info = {
      id: this.todoItem._id,
    };
    this.MyDataService.removetodo(info).subscribe((data) => {
      console.log(data);
      this.updateListFromList.emit(data);
    });
  }
  onSubmit(Form: NgForm) {
    console.log(Form);
    if (Form.valid) {
      let info = {
        id: this.todoItem._id,
        name: Form.value.name,
        category: Form.value.category,
      };
      this.MyDataService.editTodo(info).subscribe((data) => {
        console.log(data);
        this.updateListFromList.emit(data);
      });
      this.refreInfo()
    } else {
      console.log('no valid');
    }
  }


  ngOnInit() { }
  refreInfo() {
    this.open = !this.open;
  }
}
