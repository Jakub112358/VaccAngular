import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccineSelectorComponent } from './vaccine-selector.component';

describe('VaccineSelectorComponent', () => {
  let component: VaccineSelectorComponent;
  let fixture: ComponentFixture<VaccineSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccineSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VaccineSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
