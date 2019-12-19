import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AllReservationsComponent } from "./all-reservations/all-reservations.component";
import { ReservationRoutingModule } from "./reservation-routing.module";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTableModule } from "@angular/material/table";

@NgModule({
  declarations: [AllReservationsComponent],
  imports: [
    CommonModule,
    ReservationRoutingModule,
    MatPaginatorModule,
    MatTableModule
  ]
})
export class ReservationModule {}
