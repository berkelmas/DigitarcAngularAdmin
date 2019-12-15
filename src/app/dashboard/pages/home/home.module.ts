import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomePageComponent } from "./home-page/home-page.component";
import { HomeRoutingModule } from "./home-routing.module";

// ANGULAR MATERIAL
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";

// CHART MODULE
import { ChartsModule } from "ng2-charts";

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,

    // ANGULAR MATERIAL
    MatButtonModule,
    HomeRoutingModule,
    MatTableModule,
    MatPaginatorModule,

    // CHART MOODULE
    ChartsModule
  ]
})
export class HomeModule {}
