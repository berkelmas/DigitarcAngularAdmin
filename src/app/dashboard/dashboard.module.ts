// CORE ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// SHARED
import { SharedModule } from '../shared/shared.module';

// ROUTING
import { DashboardRoutingModule } from './dashboard-routing.module';

// CORE COMPONENT
import { DashboardComponent } from './dashboard.component';

import {MatSidenavModule} from '@angular/material/sidenav';

// NGRX (FEATURE)
import { StoreModule } from '@ngrx/store';
import { DashboardReducer } from './store/reducers/index.reducer';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatSidenavModule,

    DashboardRoutingModule,

    // NGRX FEATURE STATE
    StoreModule.forFeature('dashboard', DashboardReducer)
  ],
})
export class DashboardModule { }
