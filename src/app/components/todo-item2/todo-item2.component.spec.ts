/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TodoItem2Component } from './todo-item2.component';

describe('TodoItem2Component', () => {
  let component: TodoItem2Component;
  let fixture: ComponentFixture<TodoItem2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoItem2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoItem2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
