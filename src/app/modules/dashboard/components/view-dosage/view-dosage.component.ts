import { Component, OnInit } from '@angular/core';
import { DosageService } from '../../../../services/dosage.service';

@Component({
  selector: 'app-view-dosage',
  templateUrl: './view-dosage.component.html',
  styleUrls: ['./view-dosage.component.css'],
})
export class ViewDosageComponent implements OnInit {
  dosages$ = this.dosageService.dosages$;
  constructor(private dosageService: DosageService) {}

  ngOnInit(): void {}

  calculateDays(val?: string | null | undefined) {
    if (!val) {
      return '0 days';
    }
    var days = parseInt(val);
    return `${days} ${days > 1 ? 'days' : 'day'}`;
  }
}
