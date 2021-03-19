import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NewLogin } from './new-login.component';

describe('NewLogin', () => {
  let component: NewLogin;
  let fixture: ComponentFixture<NewLogin>;

  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewLogin ],
      imports: [
         ReactiveFormsModule,
         FormsModule,
         RouterTestingModule,
         HttpClientTestingModule 
      ]
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

  it('should detect form is valid', () => {
    fixture.nativeElement.querySelector('button').click();

    expect(component.loginUser()).toEqual();
  });

  it('should validate correct user and password', () => {
    component.loginForm = formBuilder.group({
      username: 'test',
      password: '123456'
    });
    fixture.nativeElement.querySelector('button').click();

    expect(component.loginForm.invalid).toEqual(false);
  });

  it('should deny access with incorrect password', () => {
    component.loginForm = formBuilder.group({
      username: 'test',
      password: '123'
    });
    fixture.nativeElement.querySelector('button').click();

    expect(component.loginUser()).toEqual();

  });
});
