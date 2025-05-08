import { Component } from '@angular/core';
import { RegistrationModel } from './RegistrationModel';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-2',
  imports: [FormsModule],
  templateUrl: './template-2.component.html',
  styleUrl: './template-2.component.scss'
})
export class Template2Component {
  formModel = new RegistrationModel();
  
    public onSubmit(): void {
      alert(`Form Submitted!\n\n
        First Name: ${this.formModel.firstName}\n
        Last Name: ${this.formModel.lastName}\n
        Email: ${this.formModel.email}\n
        Phone: ${this.formModel.phone}`);
    }
}
