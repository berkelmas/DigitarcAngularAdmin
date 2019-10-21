import { Component, OnInit } from '@angular/core';
import { AppState } from '../store/reducers/index.reducer';
import { Store } from '@ngrx/store';
import { DashboardState } from './store/reducers/index.reducer';
import { selectUiSidenav } from './store/selectors/ui.selectors';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  sidenavState : boolean;

  constructor(
    private store : Store<DashboardState>
  ) { }

  ngOnInit() {
    this.store.select(selectUiSidenav).subscribe(res => {
      this.sidenavState = res;
    });
  }

}
