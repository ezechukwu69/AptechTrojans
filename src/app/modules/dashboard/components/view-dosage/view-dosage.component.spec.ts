import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDosageComponent } from './view-dosage.component';

describe('ViewDosageComponent', () => {
  let component: ViewDosageComponent;
  let fixture: ComponentFixture<ViewDosageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDosageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewDosageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
