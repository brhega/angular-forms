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
    // Your existing code here
  }
}
