import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AeronaveInfoComponent } from './aeronave-info.component';

describe('AeronaveInfoComponent', () => {
  let component: AeronaveInfoComponent;
  let fixture: ComponentFixture<AeronaveInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AeronaveInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AeronaveInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
