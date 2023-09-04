import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicio5Component } from './exercicio5.component';

describe('Exercicio5Component', () => {
  let component: Exercicio5Component;
  let fixture: ComponentFixture<Exercicio5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exercicio5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercicio5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
