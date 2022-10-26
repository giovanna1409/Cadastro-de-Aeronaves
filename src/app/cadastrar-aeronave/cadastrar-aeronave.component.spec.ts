import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarAeronaveComponent } from './cadastrar-aeronave.component';

describe('CadastrarAeronaveComponent', () => {
  let component: CadastrarAeronaveComponent;
  let fixture: ComponentFixture<CadastrarAeronaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarAeronaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarAeronaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
