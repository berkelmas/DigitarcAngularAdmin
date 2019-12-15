import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanActivate,
  Router
} from "@angular/router";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/reducers/index.reducer";
import { selectUserLoggedIn } from "../../store/selectors/user.selectors";
import { tap } from "rxjs/operators";
import { VerifyLoginAction } from "src/app/store/actions/user.actions";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store<AppState>, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store.select(selectUserLoggedIn).pipe(
      // NAVIGATE TO LOGIN PAGE PIPELINE.
      // tap(res => !res && this.router.navigate(["/auth/login"]))
      tap(res => {
        console.log(state.url);
        this.store.dispatch(
          new VerifyLoginAction({
            localStorageItem: localStorage.getItem("user"),
            currentPath: state.url
          })
        );
      })
    );
  }
}
