import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollingTickerComponent } from './scrolling-ticker.component';

describe('ScrollingTickerComponent', () => {
  let component: ScrollingTickerComponent;
  let fixture: ComponentFixture<ScrollingTickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollingTickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollingTickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
