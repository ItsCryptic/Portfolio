import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    NotFound404Component,
    AdminComponent,
    DashboardComponent,
    AcademicsComponent,
    ComissionsComponent,
    StateComponent,
    TeamxComponent,
    SchoolHomeComponent,
    GpgComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
