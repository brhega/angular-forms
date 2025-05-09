import { Routes } from '@angular/router';
import { Template1Component } from './template-1/template-1.component';
import { Template2Component } from './template-2/template-2.component';
import { Template3Component } from './template-3/template-3.component';
import { Template4Component } from './template-4/template-4.component';
import { Reactive1Component } from './reactive-1/reactive-1.component';
import { Reactive2Component } from './reactive-2/reactive-2.component';
import { Reactive3Component } from './reactive-3/reactive-3.component';
import { Reactive4Component } from './reactive-4/reactive-4.component';

export const routes: Routes = [
  { path: 'template-1', component: Template1Component },
  { path: 'template-2', component: Template2Component },
  { path: 'template-3', component: Template3Component },
  { path: 'template-4', component: Template4Component },
  { path: 'reactive-1', component: Reactive1Component },
  { path: 'reactive-2', component: Reactive2Component },
  { path: 'reactive-3', component: Reactive3Component },
  { path: 'reactive-4', component: Reactive4Component },
  { path: '', redirectTo: 'template-1', pathMatch: 'full' },
];
