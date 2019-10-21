import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { NgModule } from '@angular/core';

const routes : Routes = [
    {
        path : 'login',
        component : LoginPageComponent
    },
    {
        path : 'register',
        component : RegisterPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { };