import { UserReducer } from './user/user.reducer';
import { UserState } from './user/user.reducer';
import { ActionReducerMap } from '@ngrx/store';


export interface AppState {
    user : UserState;
};

export const rootReducer: ActionReducerMap<AppState> = {
    user : UserReducer
};