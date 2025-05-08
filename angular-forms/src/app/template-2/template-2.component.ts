import { Component } from '@angular/core';
import { RegistrationModel } from './RegistrationModel';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-2',
  imports: [FormsModule],
  templateUrl: './template-2.component.html',
  styleUrl: './template-2.component.scss'
})
export class Template2Component {
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
