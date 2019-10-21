import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// SHARED COMPONENTS
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';

// ANGULAR MATERIAL MODULES 
import {MatSidenavModule} from '@angular/material/sidenav';


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,

    // MATERIAL MODULES
    MatSidenavModule
  ],
  exports : [
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
