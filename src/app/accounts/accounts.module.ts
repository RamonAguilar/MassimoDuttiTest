import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewLogin } from './newLogin/new-login.component.ts/new-login.component';
import { NewRegister } from './newRegister/new-register.component.ts/new-register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountsComponent } from './accounts.component';
import { AccountsRoutingModule } from './accounts-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AccountsRoutingModule
  ],
  declarations: [
      AccountsComponent,
      NewLogin,
      NewRegister
  ]
})
export class AccountsModule { }
