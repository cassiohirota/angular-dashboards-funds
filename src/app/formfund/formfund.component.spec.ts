import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormfundComponent } from './formfund.component';

describe('FormfundComponent', () => {
  let component: FormfundComponent;
  let fixture: ComponentFixture<FormfundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormfundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormfundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
