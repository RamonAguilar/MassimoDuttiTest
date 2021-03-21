import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AccountsService } from 'src/app/services/accounts.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-new-register.component.ts',
  templateUrl:'./new-register.component.html',
  styleUrls: ['./new-register.component.scss']
})
export class NewRegister implements OnInit {

  registerForm: FormGroup;
  loading = false;

  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private accountService: AccountsService,
      private alertService: AlertService
  ) {
      // redirect to home if already logged in
      if (this.accountService.userValue) {
          this.router.navigate(['/']);
      }
  }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
        first_name: ['', Validators.required],
        last_name: ['', Validators.required],
        username: ['', [Validators.required, Validators.minLength(3)]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        email: ['', Validators.required],
      });
  }

  registerUser() {

    // reset alerts on submit
    this.alertService.clear();

    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;
    this.accountService.register(this.registerForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Registration successful', { keepAfterRouteChange: true });
          this.router.navigate(['../newLogin']);
        },
        error => {
          this.loading = false;
          this.alertService.error(error.error.message);
        });
  }
}
