import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AllRoomsComponent } from "./all-rooms/all-rooms.component";
import { RoomRoutingModule } from "./room-routing.module";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [AllRoomsComponent],
  imports: [
    CommonModule,
    RoomRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule
  ]
})
export class RoomModule {}
