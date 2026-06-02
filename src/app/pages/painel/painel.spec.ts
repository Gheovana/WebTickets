import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Painel } from './painel';

describe('Painel', () => {
  let component: Painel;
  let fixture: ComponentFixture<Painel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Painel],
    }).compileComponents();

    fixture = TestBed.createComponent(Painel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
