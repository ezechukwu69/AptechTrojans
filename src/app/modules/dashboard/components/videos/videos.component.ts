import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css'],
})
export class VideosComponent implements OnInit {
  videos = [
    'https://www.youtube.com/embed/jrCfbFRrgAs',
    'https://www.youtube.com/embed/wvwXxVT61O4',
    'https://www.youtube.com/embed/_HEnohs6yYw',
  ];

  constructor() {}

  ngOnInit(): void {}
}
