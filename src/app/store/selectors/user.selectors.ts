import { createSelector, createFeatureSelector } from '@ngrx/store';
import { UserState } from '../reducers/user/user.reducer';


// USER REDUCER STATE SELECTOR.
export const selectUser = createFeatureSelector<UserState>(
    'user'
);

// LOADING VARIABLE SELECTOR IN USER REDUCER.
export const selectloginLoading = createSelector(
    selectUser,
    state => state.loginLoading
)

// LOGGEDIN VARIABLE SELECTOR IN USER REDUCER.
export const selectUserLoggedIn = createSelector(
    selectUser,
    state => state.loggedIn
);