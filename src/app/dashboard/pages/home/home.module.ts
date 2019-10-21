import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeRoutingModule } from './home-routing.module';

// ANGULAR MATERIAL
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,

    // ANGULAR MATERIAL
    MatButtonModule,

    HomeRoutingModule
  ]
})
export class HomeModule { }
