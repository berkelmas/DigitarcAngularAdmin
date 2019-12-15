import { Injectable, ComponentFactoryResolver } from "@angular/core";

// NGRX
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";

// ACTIONS
import {
  SuccessLoginAction,
  StartLoginAction,
  UserActionTypes,
  VerifyLoginAction
} from "../../actions/user.actions";

// RXJS
import { Observable, of } from "rxjs";
import { mergeMap, map, delay, tap } from "rxjs/operators";

// TYPES
import { START_LOGIN, LOGOUT, VERIFY_LOGIN } from "../../types/user.types";
import { Router, ActivatedRouteSnapshot } from "@angular/router";

@Injectable()
export class UserEffects {
  @Effect()
  loginEffect: Observable<Action> = this.actions$.pipe(
    ofType(START_LOGIN),

    // THESE 2 WILL MERGE ON AN HTTP REQUEST.
    delay(1500), // DELAY ONE AND HALF SECOND FOR ACTING LIKE HTTP REQUEST.
    mergeMap((res: StartLoginAction) => {
      return of({
        username: res.payload.username,
        token: "example bearer token",
        expirationDate: new Date(2020, 1, 1)
      });
    }), // ACT LIKE GOT DATA FROM BACK-END.

    // SAVE DATA TO LOCALSTORAGE
    mergeMap(res => {
      localStorage.setItem("user", JSON.stringify(res));
      return of(res);
    }),
    map(
      res =>
        new SuccessLoginAction({
          username: res.username,
          token: res.token,
          expirationDate: res.expirationDate
        })
    ),
    tap(() => this.router.navigate(["/dashboard/home"]))
  );

  @Effect()
  verifyLoginEffect: Observable<Action> = this.actions$.pipe(
    ofType(VERIFY_LOGIN),
    delay(500),
    map((res: VerifyLoginAction) => {
      const payload = JSON.parse(res.payload.localStorageItem);
      if (payload) {
        const { username, token, expirationDate } = payload;
        this.router.navigate([res.payload.currentPath]);
        return new SuccessLoginAction({ username, token, expirationDate });
      } else {
        this.router.navigate(["/auth/login"]);
        return { type: "NO_ACTION" };
      }
    })
  );

  @Effect({ dispatch: false })
  logoutEffect: Observable<null> = this.actions$.pipe(
    ofType(LOGOUT),
    delay(500),
    mergeMap(res => {
      localStorage.removeItem("user");
      return of(null);
    }),
    tap(() => this.router.navigate(["/"]))
  );

  constructor(private actions$: Actions, private router: Router) {}
}
