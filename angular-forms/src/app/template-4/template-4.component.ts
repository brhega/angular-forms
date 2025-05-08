import { Component } from '@angular/core';
import { RegistrationModel } from '../template-3/RegistrationModel';
import { FormsModule, NgForm } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-template-4',
  imports: [FormsModule, NgClass],
  templateUrl: './template-4.component.html',
  styleUrl: './template-4.component.scss'
})
export class Template4Component {
  formModel = new RegistrationModel();
  
  public onSubmit(form: NgForm): void {
    if (!form.valid) {
      form.control.markAllAsTouched();
    }
    else {
      alert(`Form Submitted!\n\n        First Name: ${this.formModel.firstName}\n        Last Name: ${this.formModel.lastName}\n        Email: ${this.formModel.email}\n        Phone: ${this.formModel.phone}`);
    }
  }
}
