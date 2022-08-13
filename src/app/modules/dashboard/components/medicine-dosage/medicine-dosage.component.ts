import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { DosageService } from '../../../../services/dosage.service';

@Component({
  selector: 'app-medicine-dosage',
  templateUrl: './medicine-dosage.component.html',
  styleUrls: ['./medicine-dosage.component.css'],
})
export class MedicineDosageComponent implements OnInit {
  customField = false;
  form = this.fb.group({
    medicine: ['', Validators.required],
    dose: ['', Validators.required],
    interval: ['day', Validators.required],
    customInterval: [''],
  });

  formValid = false;

  constructor(private fb: FormBuilder, private service: DosageService) {}

  ngOnInit(): void {
    this.form.valueChanges.subscribe((val) => {
      this.customField = val.interval === 'custom' ? true : false;
      this.formValid =
        (this.form.valid && val.interval === 'custom' && val.customInterval) ||
        (this.form.valid && val.interval !== 'custom')
          ? true
          : false;
      console.log(val);
    });
  }

  submit() {
    this.service.addDosage(this.form.value);
    this.form.reset();
  }

  selectCustom(fieldName: String) {
    if (fieldName === 'custom') {
      this.customField = true;
    } else {
      this.customField = false;
    }
  }
}
