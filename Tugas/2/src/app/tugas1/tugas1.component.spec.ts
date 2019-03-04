import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tugas1Component } from './tugas1.component';

describe('Tugas1Component', () => {
  let component: Tugas1Component;
  let fixture: ComponentFixture<Tugas1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tugas1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tugas1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
