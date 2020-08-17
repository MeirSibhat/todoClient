import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Itodo } from '../app/components/Itodo'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyDataService {
 localUrl="http://localhost:3000/todo/";
 apiUrl="https://api-todo-angular-meir.herokuapp.com/todo/";

   myUrl=this.apiUrl;
  constructor(public http: HttpClient) { }
  updetList(){
    // this.myListTest="meir meir meir ";
  }
  getAll() {
    return this.http.get(this.myUrl)
  }
  addTodo(obj){
    console.log(obj);

   return this.http.post(this.myUrl+"add", obj)
  }
  editTodo(obj){
    return this.http.post(this.myUrl+"edit",obj)
  }
   removetodo(obj){
    return this.http.post(this.myUrl+"remove",obj)
   }
   sortList(val){
    return this.http.get(this.myUrl+"sort/"+val)
   }
   removeAll(){
    return this.http.post(this.myUrl+"removeAll",{})
   }

}

