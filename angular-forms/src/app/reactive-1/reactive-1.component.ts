import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-1',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-1.component.html',
  styleUrls: ['./reactive-1.component.scss']
})
export class Reactive1Component {

  //you can technically use reactive forms without a formgroup,
  // but its required to us the (ngSubmit) event

  form = new FormGroup({
    firstName: new FormControl(null),
    lastName: new FormControl(null),
    email: new FormControl(null),
    phone: new FormControl(null)
  });

  public onSubmit(): void {
    const { firstName, lastName, email, phone } = this.form.value;
    alert(`Form Submitted!\n      
      First Name: ${firstName}    
      Last Name: ${lastName}      
      Email: ${email}     
      Phone: ${phone}`);
  }
}
