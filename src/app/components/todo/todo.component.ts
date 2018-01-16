import { TodoService } from './../../services/todo.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';
import { NotificationsService } from 'angular2-notifications';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: Todo[];
  constructor(private todoService: TodoService,
    private notificationsService: NotificationsService) { }

  ngOnInit() {
    this.getAllList();
  }

  getAllList() {
    this.todos = this.todoService.getAllList();
  }

  add(inputText: HTMLInputElement) {

    if (inputText.value) {
      this.todoService.add(inputText.value);

      inputText.value = '';

      this.notificationsService.success('Başarılı', 'Görev eklendi.');

      this.getAllList();
    } else {
      this.notificationsService.warn('Hata','Boş kayıt eklenemez.')
    }

  }

  delete(index: number) {
    this.todoService.delete(index);

    this.notificationsService.info('Başarılı', 'Görev silindi.');

    this.getAllList();
  }

  edit(index: number) {
    // Yönlendirme yapılacak
  }

  state(index:number) {
    this.todoService.state(index);

    this.notificationsService.success("Başarılı","Görevin durumu değiştirildi.")

    this.getAllList();
  }

  clera() {
    this.todoService.clear();

    this.notificationsService.success('Başarılı', 'Görevler silindi.');

    this.getAllList();
  }

  

}
