import { Component, OnInit, ViewChild } from '@angular/core';

// ANGULAR MATERIAL
import { MatSidenav } from '@angular/material/sidenav';
import { trigger, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations : [
    trigger('toggleSubmenu', [
      transition(':enter', [style({opacity : 0, height: 0}), animate(300)]),
      transition(':leave', animate(300, style({opacity : 0, height : 0})))
    ])
  ]
})
export class DashboardComponent implements OnInit {
  @ViewChild(MatSidenav, {static : true}) matSidenav : MatSidenav;
  secondItemState: boolean;

  constructor(
  ) { }

  ngOnInit() {
  }

  getClick() {
    console.log('clicked .... ')
  }

}
