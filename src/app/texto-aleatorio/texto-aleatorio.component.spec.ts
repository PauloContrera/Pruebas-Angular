import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoAleatorioComponent } from './texto-aleatorio.component';

describe('TextoAleatorioComponent', () => {
  let component: TextoAleatorioComponent;
  let fixture: ComponentFixture<TextoAleatorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextoAleatorioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextoAleatorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
