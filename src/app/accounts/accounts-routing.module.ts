import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountsComponent } from './accounts.component';
import { NewLogin } from './newLogin/new-login.component.ts/new-login.component';
import { NewRegister } from './newRegister/new-register.component.ts/new-register.component';

const routes: Routes = [
  { path: '', component: AccountsComponent,
  children: [
    { path: 'newLogin', component: NewLogin },
    { path: 'newRegister', component: NewRegister },
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }