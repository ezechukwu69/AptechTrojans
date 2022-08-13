import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AppointmentsService } from '../../../../services/appointments.service';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css'],
})
export class ApplicationFormComponent implements OnInit {
  form = this.fb.group({
    fullName: ['', [Validators.required]],
    pOfVisit: ['', Validators.required],
    schedule: ['', Validators.required],
  });

  submit() {
    this.service.addAppointment(this.form.value);
    this.form.reset();
  }

  constructor(private fb: FormBuilder, private service: AppointmentsService) {}

  ngOnInit(): void {}
}
