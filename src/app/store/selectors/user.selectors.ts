import { createSelector, createFeatureSelector } from '@ngrx/store';
import { UserState } from '../reducers/user/user.reducer';


// USER REDUCER STATE SELECTOR.
export const selectUser = createFeatureSelector<UserState>(
    'user'
);

// LOGGEDIN VARIABLE SELECTOR IN USER REDUCER.
export const userLoggedInSelector = createSelector(
    selectUser,
    state => state.loggedIn
);