import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// AUTH COMPONENTS
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';

// ROUTING
import { AuthRoutingModule } from './auth-routing.module';


@NgModule({
  declarations: [LoginPageComponent, RegisterPageComponent],
  imports: [
    CommonModule,

    AuthRoutingModule
  ]
})
export class AuthModule { }
