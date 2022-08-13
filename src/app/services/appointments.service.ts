import { Injectable } from '@angular/core';
import { Appointment } from '../models/appointment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppointmentsService {
  appointmentStore: Appointment[] = [];
  private appointmentSubject: BehaviorSubject<Appointment[]> =
    new BehaviorSubject<Appointment[]>([]);

  appointments$ = this.appointmentSubject.asObservable();

  addAppointment(appointment: Appointment) {
    this.appointmentStore.push(appointment);
    this.appointmentSubject.next(this.appointmentStore);
  }

  constructor() {}
}
