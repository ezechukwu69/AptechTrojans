import { Injectable } from '@angular/core';
import { Vitals } from '../models/Vitals';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VitalsService {
  vitalsStore: Vitals[] = [];
  private vitalsSubject: BehaviorSubject<Vitals[]> = new BehaviorSubject<
    Vitals[]
  >([]);

  vitals$ = this.vitalsSubject.asObservable();

  addVitals(vitals: Vitals) {
    this.vitalsStore.push(vitals);
    this.vitalsSubject.next(this.vitalsStore);
  }

  constructor() {}
}
