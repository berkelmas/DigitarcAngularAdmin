import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AllReservationsComponent } from "./all-reservations/all-reservations.component";

const routes: Routes = [
  {
    path: "allreservations",
    component: AllReservationsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationRoutingModule {}
