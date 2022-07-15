import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NotFound404Component } from './not-found404/not-found404.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AcademicsComponent } from './academics/academics.component';
import { ComissionsComponent } from './comissions/comissions.component';
import { StateComponent } from './state/state.component';
import { TeamxComponent } from './teamx/teamx.component';
import { SchoolHomeComponent } from './school-home/school-home.component';
import { GpgComponent } from './gpg/gpg.component';

const routes: Routes = [
 { path: '', component: HomeComponent  },
 { path: 'about', component: AboutComponent  },
 { path: 'admin', component: AdminComponent},
 { path: 'dashboard', component: DashboardComponent },
 { path: 'school/academics', component: AcademicsComponent },
 { path: 'comissions', component: ComissionsComponent },
 { path: 'school/projects/state', component: StateComponent},
 //{ path: 'projects/teamx', component: TeamxComponent},
 { path: 'school', component: SchoolHomeComponent },
 { path: 'gpg', component: GpgComponent},
 { path: '**', component: NotFound404Component }  //Don't put anything after this.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
