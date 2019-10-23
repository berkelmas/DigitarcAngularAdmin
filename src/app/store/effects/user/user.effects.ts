import { Injectable } from '@angular/core';

// NGRX
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

// ACTIONS
import { SuccessLoginAction } from '../../actions/user.actions';

// RXJS
import { Observable, of } from 'rxjs';
import { mergeMap, map, delay, tap } from 'rxjs/operators';

// TYPES
import { START_LOGIN } from '../../types/user.types';
import { Router } from '@angular/router';

@Injectable()
export class UserEffects {

    @Effect()
    usersEffect : Observable<Action> = this.actions$.pipe(
        ofType(START_LOGIN),

        // THESE 2 WILL MERGE ON AN HTTP REQUEST.
        delay(1500),  // DELAY ONE SECOND FOR ACTING LIKE HTTP REQUEST.
        mergeMap(res => {
          return of({
            username: res['payload']['username'],
            token: 'example bearer token',
            expirationDate: new Date(2020, 1, 1)
          })
        }),  // ACT LIKE GOT DATA FROM BACK-END.

        // SAVE DATA TO LOCALSTORAGE
        mergeMap(res => {
          localStorage.setItem('user', JSON.stringify(res));
          return of(res);
        }),
        map(res => new SuccessLoginAction({username : res.username, token : res.token, expirationDate : res.expirationDate})),
        tap(() => this.router.navigate(['/dashboard/home']))
    );

    constructor(
        private actions$: Actions,
        private router: Router
    ) {  }
}