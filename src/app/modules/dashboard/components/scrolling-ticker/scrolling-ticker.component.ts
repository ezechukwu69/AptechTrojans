import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-scrolling-ticker',
  templateUrl: './scrolling-ticker.component.html',
  styleUrls: ['./scrolling-ticker.component.css'],
})
export class ScrollingTickerComponent implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit(): void {
    this.getCurrentPosition();
  }

  ngOnDestroy() {}

  text = 'No location';

  showPosition(position: any) {
    this.text =
      'Latitude: ' +
      position.coords.latitude +
      ' Longitude: ' +
      position.coords.longitude;
  }
  getCurrentPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this.showPosition,
        this.showError
      );
    } else {
      this.text = 'Geolocation is not supported by this browser.';
    }
  }

  showError(error: any) {
    console.log(error.code);
    switch (error.code) {
      case error.PERMISSION_DENIED:
        this.text = 'User denied the request for Geolocation.';
        break;
      case error.POSITION_UNAVAILABLE:
        this.text = 'Location information is unavailable.';
        break;
      case error.TIMEOUT:
        this.text = 'The request to get user location timed out.';
        break;
      case error.UNKNOWN_ERROR:
        this.text = 'An unknown error occurred.';
        break;
    }
  }
}
