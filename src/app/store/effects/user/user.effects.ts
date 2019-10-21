import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';

import { mergeMap, map, delay } from 'rxjs/operators';

// TYPES
import { START_USERNAME_CHANGE, USERNAME_CHANGE } from '../../types/user.types';

export class UserEffects {

    @Effect()
    usersEffect : Observable<Action> = this.actions$.pipe(
        ofType(START_USERNAME_CHANGE),
        delay(1000),
        mergeMap(() => {
            return of('observable...')
        }),
        map(res => ({type : USERNAME_CHANGE, payload : { username : res }}))
    );

    constructor(
        private actions$: Actions
    ) {  }
}