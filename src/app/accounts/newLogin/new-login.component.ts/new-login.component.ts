import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AccountsService } from 'src/app/services/accounts.service';

// JSON
import usersList from 'src/assets/json/users.json';

@Component({
  selector: 'app-new-login.component.ts',
  templateUrl: './new-login.component.html',
  styleUrls: ['./new-login.component.scss']
})
export class NewLogin implements OnInit {

  loginForm: FormGroup;
  dataLoading: boolean = false;
  users: any = usersList;
  unregistered: boolean = false;
  invalid: boolean = false;
  returnUrl: string;

  constructor(
    private fb: FormBuilder,
    private accountService: AccountsService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [ '', [Validators.required, Validators.minLength(3)]],
      password: [ '', [Validators.required, Validators.minLength(6)]]
    })

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  loginUser() {

    // this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.dataLoading = true;
    this.accountService.login(this.loginForm.controls.username.value, this.loginForm.controls.password.value)
    .pipe(first())
      .subscribe(
        data => {
          this.unregistered = false;
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.dataLoading = false;
          this.unregistered = true;
        });
  }
}

