import { Component, OnInit } from '@angular/core';
import { VitalsService } from '../../../../services/vitals.service';

@Component({
  selector: 'app-view-vitals',
  templateUrl: './view-vitals.component.html',
  styleUrls: ['./view-vitals.component.css'],
})
export class ViewVitalsComponent implements OnInit {
  vitals$ = this.vitalsService.vitals$;

  constructor(private vitalsService: VitalsService) {}

  ngOnInit(): void {}
}
