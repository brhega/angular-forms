import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reactive-2',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-2.component.html',
  styleUrl: './reactive-2.component.scss'
})
export class Reactive2Component {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: [''],
      phone: ['']
    });
  }

  public onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
    } else {
      const { firstName, lastName, email, phone } = this.form.value;
      alert(`Form Submitted!\n
        First Name: ${firstName}
        Last Name: ${lastName}
        Email: ${email}
        Phone: ${phone}`);
    }
  }
}
