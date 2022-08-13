import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ApplicationFormComponent } from './components/application-form-component/application-form.component';
import { MedicineDosageComponent } from './components/medicine-dosage/medicine-dosage.component';
import { VitalsFormComponent } from './components/vitals-form/vitals-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewAppointmentsComponent } from './components/view-appointments/view-appointments.component';
import { DosageService } from '../../services/dosage.service';
import { ViewDosageComponent } from './components/view-dosage/view-dosage.component';
import { ViewVitalsComponent } from './components/view-vitals/view-vitals.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { SharedModule } from '../shared/shared.module';
import { VideosComponent } from './components/videos/videos.component';
import { AudiosComponent } from './components/audios/audios.component';
import { ScrollingTickerComponent } from './components/scrolling-ticker/scrolling-ticker.component';
import { SafePipe } from './pipes/safe-pipe.pipe';

@NgModule({
  declarations: [
    DashboardComponent,
    ApplicationFormComponent,
    MedicineDosageComponent,
    VitalsFormComponent,
    ViewAppointmentsComponent,
    ViewDosageComponent,
    ViewVitalsComponent,
    ContactUsComponent,
    FeedbackComponent,
    VideosComponent,
    AudiosComponent,
    ScrollingTickerComponent,
    SafePipe,
  ],
  providers: [],
  imports: [CommonModule, ReactiveFormsModule, SharedModule],
})
export class DashboardModule {}
