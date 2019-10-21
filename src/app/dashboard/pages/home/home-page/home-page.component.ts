import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers/index.reducer';
import { startLoginAction } from 'src/app/store/actions/user.actions';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(
    private store : Store<AppState>
  ) { }

  ngOnInit() {
    this.store.subscribe(console.log);
  }

  handleLogin() {
    this.store.dispatch(startLoginAction())
  }

}
