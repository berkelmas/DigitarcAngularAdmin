import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AllRoomsComponent } from "./all-rooms/all-rooms.component";

const routes: Routes = [
  {
    path: "allrooms",
    component: AllRoomsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomRoutingModule {}
