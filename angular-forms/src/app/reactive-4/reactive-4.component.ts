import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reactive-4',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-4.component.html',
  styleUrl: './reactive-4.component.scss'
})
export class Reactive4Component {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      phone: [null]
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
