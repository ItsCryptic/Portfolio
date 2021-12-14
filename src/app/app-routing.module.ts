import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NotFound404Component } from './not-found404/not-found404.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AcademicsComponent } from './academics/academics.component';

const routes: Routes = [
 { path: '', component: HomeComponent  },
 { path: 'about', component: AboutComponent  },
 { path: 'admin', component: AdminComponent},
 { path: 'dashboard', component: DashboardComponent },
 { path: '**', component: NotFound404Component },
 { path: 'archived_projects', redirectTo: 'archived_projects/'},
 { path: 'academics', component: AcademicsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
