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
import { GlobalState } from 'src/app/app.module';

@Injectable()
export class UserEffects {

    @Effect()
    usersEffect : Observable<Action> = this.actions$.pipe(
        ofType(START_LOGIN),
        delay(1500),  // DELAY ONE SECOND FOR ACTING LIKE HTTP REQUEST.
        mergeMap(() => {
          return of({
            username: 'berkelmas',
            token: 'example bearer token',
            expirationDate: new Date(2020, 1, 1)
          })
        }),  // ACT LIKE GOT DATA FROM BACK-END.
        map(res => successLoginAction(res.username, res.token, res.expirationDate))
    );

    constructor(
        private actions$: Actions,
        private store : Store<GlobalState>
    ) {  }
}