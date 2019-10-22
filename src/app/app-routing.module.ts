import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/canActivate/auth.guard';


const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module')
      .then(m => m.AuthModule)
  },
  {
    path : 'dashboard',
    // canActivate: [AuthGuard],
    loadChildren: () => import('./dashboard/dashboard.module')
      .then(m => m.DashboardModule)
  },

  // REDIRECTING
  {
    path : '',
    pathMatch : 'full',
    redirectTo : '/auth/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
