import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DosageService } from './services/dosage.service';
import { AppointmentsService } from './services/appointments.service';
import { VitalsService } from './services/vitals.service';
import { AuthModule } from './modules/auth/auth.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    DashboardModule,
    ReactiveFormsModule,
  ],
  providers: [AppointmentsService, DosageService, VitalsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
