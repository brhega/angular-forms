import { Component } from '@angular/core';
import { RegistrationModel } from './RegistrationModel';
import { FormsModule, NgForm } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-template-3',
  imports: [FormsModule, NgClass],
  templateUrl: './template-3.component.html',
  styleUrl: './template-3.component.scss'
})
export class Template3Component {
  formModel = new RegistrationModel();
  
  public onSubmit(form: NgForm): void {
    if (!form.valid) {
      form.control.markAllAsTouched();
    }
    else {
      alert(`Form Submitted!\n
        First Name: ${this.formModel.firstName}
        Last Name: ${this.formModel.lastName}
        Email: ${this.formModel.email}
        Phone: ${this.formModel.phone}`);

    }
  }
}
