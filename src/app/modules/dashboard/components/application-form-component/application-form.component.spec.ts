import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationFormComponentComponent } from './application-form-component.component';

describe('ApplicationFormComponentComponent', () => {
  let component: ApplicationFormComponentComponent;
  let fixture: ComponentFixture<ApplicationFormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationFormComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
