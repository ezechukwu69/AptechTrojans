import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-audios',
  templateUrl: './audios.component.html',
  styleUrls: ['./audios.component.css'],
})
export class AudiosComponent implements OnInit {
  audios = [
    'https://www.youtube.com/embed/jrCfbFRrgAs?rel=0&autohide=0&fs=0',
    'https://www.youtube.com/embed/wvwXxVT61O4?rel=0&autohide=0&fs=0',
    'https://www.youtube.com/embed/_HEnohs6yYw?rel=0&autohide=0&fs=0',
  ];

  constructor() {}

  ngOnInit(): void {}
}
