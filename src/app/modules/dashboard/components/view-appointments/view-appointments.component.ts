import { Component, OnInit } from '@angular/core';
import { AppointmentsService } from '../../../../services/appointments.service';

@Component({
  selector: 'app-view-appointments',
  templateUrl: './view-appointments.component.html',
  styleUrls: ['./view-appointments.component.css'],
})
export class ViewAppointmentsComponent implements OnInit {
  appointments$ = this.appointmentsService.appointments$;
  constructor(private appointmentsService: AppointmentsService) {}

  ngOnInit(): void {}
}
