import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { startChangeUsernameAction } from './store/actions/user.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public username : string;

  constructor(
    private store : Store<any>
  ) {}

  ngOnInit() {

    
  }
}
