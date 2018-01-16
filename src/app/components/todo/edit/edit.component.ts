import { TodoService } from './../../../services/todo.service';
import { Todo } from './../../../models/todo';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private router: Router, private todoService: TodoService, private activatedRoute: ActivatedRoute ) { }

  model: Todo = new Todo;
  index: number;
  ngOnInit() {
    this.getTodo();
  }
  getTodo() {
    this.activatedRoute.params.subscribe(params => {
      this.index = params['index'];
      this.model = this.todoService.getTodoByIndex(this.index);
    });
  }

  validate(todoForm: NgForm) {
    if (todoForm.invalid) {
      return;
    } else {
      this.todoService.edit(this.index, this.model);

      this.router.navigate(['todo']);
    }
  }

}
