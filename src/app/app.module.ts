import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { PrincipalModule } from './components/principal/principal.module';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { AccountsModule } from './accounts/accounts.module';
import { HttpClientModule } from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import { shipReducer } from './components/ships/ships.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PrincipalComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    PrincipalModule,
    StoreDevtoolsModule.instrument({
      maxAge: 10
    }),
    AccountsModule,
    StoreModule.forRoot({
      ship: shipReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
