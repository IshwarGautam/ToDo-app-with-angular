import { Todo } from 'src/app/Todo';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CustomValidator } from 'src/app/customValidator';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css'],
})
export class EditTodoComponent {
  @Input() todo: Todo;
  @Output() todoUpdate: EventEmitter<Todo> = new EventEmitter();

  title: string = '';
  desc: string = '';

  ngOnChanges() {
    if (this.todo) {
      this.title = this.todo.title;
      this.desc = this.todo.desc;
    }
  }

  onSubmit() {
    const todo = {
      title: this.title,
      desc: this.desc,
      active: this.todo.active,
    };

    this.todoUpdate.emit(todo);
  }

  //Create FormGroup
  requiredForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm();
  }

  //Create required field validator for name
  myForm() {
    this.requiredForm = this.fb.group({
      title: ['', CustomValidator.requiredField],
      desc: ['', CustomValidator.requiredField],
    });
  }
}
