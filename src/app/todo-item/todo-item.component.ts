import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo
  @Output() todoClicked: EventEmitter<void> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onTodoClicked() {
    this.todoClicked.emit()

  }

}
