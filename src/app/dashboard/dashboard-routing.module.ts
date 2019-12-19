import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    children: [
      {
        path: "home",
        loadChildren: () =>
          import("./pages/home/home.module").then(m => m.HomeModule)
      },
      {
        path: "reservation",
        loadChildren: () =>
          import("./pages/reservation/reservation.module").then(
            m => m.ReservationModule
          )
      },
      {
        path: "room",
        loadChildren: () =>
          import("./pages/room/room.module").then(m => m.RoomModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
