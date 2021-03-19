import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NewRegister } from './new-register.component';

describe('NewRegister', () => {
  let component: NewRegister;
  let fixture: ComponentFixture<NewRegister>;

  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewRegister ],
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
    fixture = TestBed.createComponent(NewRegister);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should detect form is valid', () => {
    fixture.nativeElement.querySelector('button').click();

    expect(component.registerUser()).toEqual();
  });

  it('should validate correct user data', () => {
    component.registerForm = formBuilder.group({
      username: 'test',
      password: '123456',
      first_name: 'test',
      last_name:'test',
      email: 'test@test.com'
    });
    fixture.nativeElement.querySelector('button').click();

    expect(component.registerForm.invalid).toEqual(false);
  });

  it('should deny access with incorrect user data', () => {
    component.registerForm = formBuilder.group({
      username: 'test',
      password: '123',
      first_name: 'test',
      last_name:'test',
      email: 'test@test.com'
    });
    fixture.nativeElement.querySelector('button').click();

    expect(component.registerUser()).toEqual();

  });
});
