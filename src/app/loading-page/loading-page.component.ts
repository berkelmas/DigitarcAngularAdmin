import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { AppState } from "../store/reducers/index.reducer";
import { VerifyLoginAction } from "../store/actions/user.actions";

@Component({
  selector: "app-loading-page",
  templateUrl: "./loading-page.component.html",
  styleUrls: ["./loading-page.component.scss"]
})
export class LoadingPageComponent implements OnInit {
  constructor(private router: Router, private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(
      new VerifyLoginAction({
        localStorageItem: localStorage.getItem("user"),
        currentPath: "/dashboard/home"
      })
    );
  }
}
