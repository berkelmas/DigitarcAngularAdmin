import { Component, OnInit, ViewChild, EventEmitter, Output, Input } from '@angular/core';

// ANGULAR MATERIAL
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() clicked = new EventEmitter();
  @Input('sidenavState') sidenavState: boolean;

  constructor() { }

  ngOnInit() { }

  handleToggle() {
    this.clicked.emit(true);
  }
}
