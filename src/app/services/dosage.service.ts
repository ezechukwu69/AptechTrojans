import { Injectable } from '@angular/core';
import { Dosage } from '../models/Dosage';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DosageService {
  dosageStore: Dosage[] = [];
  private dosageSubject: BehaviorSubject<Dosage[]> = new BehaviorSubject<
    Dosage[]
  >([]);

  dosages$ = this.dosageSubject.asObservable();

  addDosage(dosage: Dosage) {
    this.dosageStore.push(dosage);
    this.dosageSubject.next(this.dosageStore);
  }

  constructor() {}
}
