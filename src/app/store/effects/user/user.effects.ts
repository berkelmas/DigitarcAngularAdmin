import { Injectable } from '@angular/core';

// NGRX
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';

// ACTIONS
import { successLoginAction } from '../../actions/user.actions';

// RXJS
import { Observable, of } from 'rxjs';
import { mergeMap, map, delay, concatMap, tap, take } from 'rxjs/operators';

// TYPES
import { START_LOGIN } from '../../types/user.types';
import { Router } from '@angular/router';

@Injectable()
export class UserEffects {

    @Effect()
    usersEffect : Observable<Action> = this.actions$.pipe(
        ofType(START_LOGIN),
        tap(console.log),

        // THESE 2 WILL MERGE ON AN HTTP REQUEST.
        delay(1500),  // DELAY ONE SECOND FOR ACTING LIKE HTTP REQUEST.
        mergeMap(res => {
          return of({
            username: res.payload.username,
            token: 'example bearer token',
            expirationDate: new Date(2020, 1, 1)
          })
        }),  // ACT LIKE GOT DATA FROM BACK-END.

        // SAVE DATA TO LOCALSTORAGE
        mergeMap(res => {
          localStorage.setItem('user', JSON.stringify(res));
          return of(res);
        }),
        map(res => successLoginAction(res.username, res.token, res.expirationDate)),
        tap(() => this.router.navigate(['/dashboard/home']))
    );

    constructor(
        private actions$: Actions,
        private router: Router
    ) {  }
}