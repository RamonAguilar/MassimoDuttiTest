import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShipsComponent } from '../ships/ships.component';
import { PageOneComponent } from '../page-one/page-one.component';
import { PageTwoComponent } from '../page-two/page-two.component';
import { PrincipalComponent } from './principal.component';
import { AuthGuard } from 'src/app/auth/auth.guard';

const routes: Routes = [
  { path: '', component: PrincipalComponent,
  children: [
    { path: 'ships', component: ShipsComponent, canActivate: [AuthGuard]  },
    { path: 'pageOne', component: PageOneComponent, canActivate: [AuthGuard]  },
    { path: 'pageTwo', component: PageTwoComponent, canActivate: [AuthGuard]  },
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalComponentsRoutingModule { }