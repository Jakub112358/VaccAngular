import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadCalendarComponent } from './load-calendar.component';

describe('LoadCalendarComponent', () => {
  let component: LoadCalendarComponent;
  let fixture: ComponentFixture<LoadCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadCalendarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
