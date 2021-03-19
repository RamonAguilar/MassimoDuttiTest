import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLogin } from './new-login.component';

describe('NewLogin', () => {
  let component: NewLogin;
  let fixture: ComponentFixture<NewLogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewLogin ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLogin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
