import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRegister } from './new-register.component';

describe('NewRegister', () => {
  let component: NewRegister;
  let fixture: ComponentFixture<NewRegister>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewRegister ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRegister);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
