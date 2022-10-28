import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAircraftComponent } from './register-aircraft.component';

describe('RegisterAircraftComponent', () => {
  let component: RegisterAircraftComponent;
  let fixture: ComponentFixture<RegisterAircraftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterAircraftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterAircraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
