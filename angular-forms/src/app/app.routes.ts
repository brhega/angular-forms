import { Routes } from '@angular/router';
import { Template1Component } from './template-1/template-1.component';
import { Template2Component } from './template-2/template-2.component';

export const routes: Routes = [
  { path: 'template-1', component: Template1Component },
  { path: 'template-2', component: Template2Component },
  { path: '', redirectTo: 'template-1', pathMatch: 'full' },
];
