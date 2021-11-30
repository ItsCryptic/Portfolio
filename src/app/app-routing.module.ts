import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { about } from './src/about.component';

const routes: Routes = [
 { path: 'about', component: about }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
