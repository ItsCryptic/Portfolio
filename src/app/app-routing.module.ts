import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NotFound404Component } from './not-found404/not-found404.component';

const routes: Routes = [
 { path: '', component: HomeComponent  },
 { path: 'about', component: AboutComponent  },
 { path: 'img'},
 { path: '**', component: NotFound404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
