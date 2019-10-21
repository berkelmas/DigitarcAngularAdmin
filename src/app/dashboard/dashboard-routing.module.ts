import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
    {
        path : '',
        component : DashboardComponent,
        children : [
            {
                path : 'home',
                loadChildren : () => import('./pages/home/home.module')
                    .then(m => m.HomeModule)
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class DashboardRoutingModule { }
  