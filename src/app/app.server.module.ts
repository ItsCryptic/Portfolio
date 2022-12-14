import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { GpgComponent } from './gpg/gpg.component';
import { TeamxComponent } from './teamx/teamx.component';
import { StateComponent } from './state/state.component';
import { AcademicsComponent } from './academics/academics.component';
import { AdminComponent } from './admin/admin.component';
import { ComissionsComponent } from './comissions/comissions.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SchoolHomeComponent } from './school-home/school-home.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    AboutComponent,
    HomeComponent,
    GpgComponent,
    TeamxComponent,
    StateComponent,
    AcademicsComponent,
    AdminComponent,
    ComissionsComponent,
    DashboardComponent,
    SchoolHomeComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
