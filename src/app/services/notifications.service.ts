import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  notifications: string[] = [];
  notificationsSubject: BehaviorSubject<string[]> = BehaviorSubject<string[]>(
    []
  );
  notifications$ = notificationsSubject.asObservable();
  constructor() {}

  addNotification(value: string) {
    this.notifications.push(value);
    this.notificationsSubject.next(this.notifications);
  }
}
