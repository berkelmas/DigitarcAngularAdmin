// CORE ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// ROUTING
import { DashboardRoutingModule } from './dashboard-routing.module';

// CORE COMPONENT
import { DashboardComponent } from './dashboard.component';

// ANGULAR MATERIAL
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

// NGRX (FEATURE)
import { StoreModule } from '@ngrx/store';
import { DashboardReducer } from './store/reducers/index.reducer';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,

    // ANGULAR MATERIAL
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,

    DashboardRoutingModule,

    // NGRX FEATURE STATE
    StoreModule.forFeature('dashboard', DashboardReducer)
  ],
})
export class DashboardModule { }
