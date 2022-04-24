import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrafDividend10Component } from './graf-dividend10.component';

describe('GrafDividend10Component', () => {
  let component: GrafDividend10Component;
  let fixture: ComponentFixture<GrafDividend10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrafDividend10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrafDividend10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
