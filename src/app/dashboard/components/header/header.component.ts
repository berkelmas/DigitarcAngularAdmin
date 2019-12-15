import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { Store } from "@ngrx/store";
import { GlobalState } from "src/app/app.module";
import { selectUserUsername } from "src/app/store/selectors/user.selectors";
import { Observable } from "rxjs";
import { LogoutAction } from "src/app/store/actions/user.actions";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  @Output() clicked = new EventEmitter();
  @Input("sidenavState") sidenavState: boolean;

  username$: Observable<string>;

  constructor(private store: Store<GlobalState>) {}

  ngOnInit() {
    this.username$ = this.store.select(selectUserUsername);
    this.username$.subscribe(console.log);
  }

  handleLogout() {
    this.store.dispatch(new LogoutAction("logout"));
  }

  handleToggle() {
    this.clicked.emit(true);
  }
}
