import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// NGRX
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

// REDUCERS
import { rootReducer } from "./store/reducers/index.reducer";

// EFFECTS
import { AppEffects } from "./store/effects/app.effects";
import { UserEffects } from "./store/effects/user/user.effects";

// NGRX STATES
import { UserState } from "./store/reducers/user/user.reducer";
import { DashboardState } from "./dashboard/store/reducers/index.reducer";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoadingPageComponent } from "./loading-page/loading-page.component";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

// GLOBAL NGRX STATE
export interface GlobalState {
  user: UserState;
  dashboard: DashboardState;
}

@NgModule({
  declarations: [AppComponent, LoadingPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,

    StoreModule.forRoot(rootReducer),
    EffectsModule.forRoot([AppEffects, UserEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 20
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
