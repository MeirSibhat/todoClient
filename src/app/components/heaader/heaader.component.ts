import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MyDataService } from '../../../servies/myData.service';

import * as $ from 'jquery';

@Component({
  selector: 'app-heaader',
  templateUrl: './heaader.component.html',
  styleUrls: ['./heaader.component.scss']
})
export class HeaaderComponent implements OnInit {
  @Output() updateListFromHeader = new EventEmitter<any>();
  constructor(private MyDataService: MyDataService) { }
  open: boolean = false

  confirmRemove(){
    this.open=!this.open;
  }


  Remove(){
    this.confirmRemove();
    this.MyDataService.removeAll().subscribe((data) => {
      console.log(data);
      this.updateListFromHeader.emit(data);
    });
  }
  ngOnInit() {
  }
  dosort(e){
   let info= e.target.innerText;
    this.MyDataService.sortList(info).subscribe(data=>{
      console.log(data);
      this.updateListFromHeader.emit(data)

    })
  }

  onSubmit(Form: NgForm) {
    if (Form.valid) {
      let info={
        name:Form.value.name,
        category:Form.value.category
      }

      this.MyDataService.addTodo(info).subscribe(data=>{
        console.log(data);
        this.updateListFromHeader.emit(data)

      })
      $("#modelAdd").hide("slow", function () {
        $('.modal-backdrop ').removeClass("modal-backdrop fade show")
        $(".modal-open ").css("overflow", "unset");
      });
    }
    else {
      console.log("no valid");
    }
  }
}

