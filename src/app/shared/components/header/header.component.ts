import { Component, OnInit } from '@angular/core';

// NGRX
import { Store } from '@ngrx/store';
import { DashboardState } from '../../../dashboard/store/reducers/index.reducer';
import { selectUiSidenav } from '../../../dashboard/store/selectors/ui.selectors';
import { openSidenav, closeSidenav } from 'src/app/dashboard/store/actions/ui.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  sidenavState : boolean;

  constructor(
    private store : Store<DashboardState>
  ) { }

  ngOnInit() {
    this.store.select(selectUiSidenav).subscribe(res => {
      this.sidenavState = res;
    })
  }

  toggleSidenav() {
    this.sidenavState ? this.store.dispatch(closeSidenav()) : this.store.dispatch(openSidenav());
  }

}
