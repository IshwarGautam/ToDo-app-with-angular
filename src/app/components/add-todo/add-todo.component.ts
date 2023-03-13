import { Todo } from 'src/app/Todo';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CustomValidator } from 'src/app/customValidator';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  title: string;
  desc: string;
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  ngOnInit(): void {}

  onSubmit() {
    const todo = {
      title: this.requiredForm.controls['title'].value.trim(),
      desc: this.requiredForm.controls['desc'].value.trim(),
      active: true,
    };

    this.requiredForm.controls['title'].setValue('');
    this.requiredForm.controls['desc'].setValue('');

    this.todoAdd.emit(todo);
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
