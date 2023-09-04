import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicio6Component } from './exercicio6.component';

describe('Exercicio6Component', () => {
  let component: Exercicio6Component;
  let fixture: ComponentFixture<Exercicio6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exercicio6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercicio6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
