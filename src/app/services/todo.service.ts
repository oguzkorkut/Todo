import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable()
export class TodoService {

  todos: Todo[] = [];

  constructor() { }

  getAllList() {
    return this.todos;
  }

  add(text: string): void {

    var todo: Todo = {
      text: text,
      createdAt: new Date(),
      active: true
    };

    this.todos.push(todo);

  }

  delete(index: number) {
    this.todos.splice(index, 1);
  }

  edit(index: number, todo: Todo) {
    this.todos[index] = todo;
  }

  getTodoByIndex(index: number): Todo {
    var todo = this.todos[index];
    return todo;
  }

  state(index){
    this.todos[index].active = !this.todos[index].active;
  }

  clear(): void {
    this.todos.splice(0, this.todos.length);
  }
}
