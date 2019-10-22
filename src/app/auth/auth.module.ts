import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// AUTH COMPONENTS
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';

// ROUTING
import { AuthRoutingModule } from './auth-routing.module';

// ANGULAR MATERIAL
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [LoginPageComponent, RegisterPageComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,

    // ANGULAR MATERIAL
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule
  ]
})
export class AuthModule { }
