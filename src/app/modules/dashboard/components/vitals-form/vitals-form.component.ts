import { Component, OnInit } from '@angular/core';
import { VitalType } from '../../../../models/vital-type';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { VitalsService } from '../../../../services/vitals.service';

@Component({
  selector: 'app-vitals-form',
  templateUrl: './vitals-form.component.html',
  styleUrls: ['./vitals-form.component.css'],
})
export class VitalsFormComponent implements OnInit {
  vitalsTypes: VitalType[] = [
    {
      name: 'BP',
      unit: 'mmHg',
    },
    {
      name: 'Glucose Level',
      unit: 'mM',
    },
    {
      name: 'Weight',
      unit: 'kg',
    },
    {
      name: 'Height',
      unit: 'cm',
    },
    {
      name: 'Cholestrol level',
      unit: 'dL',
    },
  ];

  form = this.fb.group({
    category: ['BP', [Validators.required]],
    value: ['', Validators.required],
    dateRecorded: ['', Validators.required],
  });

  getUnit(name: String) {
    return this.vitalsTypes.filter((x) => x.name === name)[0];
  }

  tracker(index: number, vitalType: VitalType) {
    return vitalType.name;
  }

  submit() {
    let formValue = this.form.value;
    this.vitalsService.addVitals({
      ...formValue,
      unit: this.vitalsTypes.filter((x) => x.name === formValue.category)[0]
        .unit,
    });
    this.form.reset();
  }

  constructor(private fb: FormBuilder, private vitalsService: VitalsService) {}

  unit = 'mmHg';

  ngOnInit(): void {
    this.form.valueChanges.subscribe(
      (val) =>
        (this.unit = this.vitalsTypes.filter(
          (x) => x.name === val.category
        )[0].unit)
    );
  }
}
