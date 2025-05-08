import { Component } from '@angular/core';
import { RegistrationModel } from './RegistrationModel';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-1',
  imports: [FormsModule],
  templateUrl: './template-1.component.html',
  styleUrl: './template-1.component.scss'
})
export class Template1Component {
  formModel = new RegistrationModel();

  public onSubmit(): void {
    alert(`Form Submitted!\n
      First Name: ${this.formModel.firstName}
      Last Name: ${this.formModel.lastName}
      Email: ${this.formModel.email}
      Phone: ${this.formModel.phone}`);
  }
}
