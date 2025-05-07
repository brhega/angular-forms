import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Template1Component } from './template-1/template-1.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Template1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-forms';
}
