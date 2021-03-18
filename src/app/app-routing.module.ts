import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewLogin } from './accounts/newLogin/new-login.component.ts/new-login.component';

// Components
const accountsModule = () => import('./accounts/accounts.module').then(x => x.AccountsModule);

const routes: Routes = [
  { path: '', component: NewLogin},
  { path: 'account', loadChildren: accountsModule },
  { path: 'principal', loadChildren: () => import(`./components/principal/principal.module`).then(m => m.PrincipalModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
