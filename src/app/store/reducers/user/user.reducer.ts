import {
  START_LOGIN,
  SUCCESS_LOGIN,
  FAILED_LOGIN,
  START_LOGIN_LOADING
} from '../../types/user.types';

import { UserActionTypes, SuccessLoginAction } from '../../actions/user.actions';

const initialState : UserState = {
    loggedIn : false,
    token : null,
    expirationDate : null,
    username : null,

    loginLoading : false
}

export interface UserState {
    loggedIn : boolean;
    token : string;
    expirationDate : Date;
    username : string;

    loginLoading : boolean;
};

export const UserReducer = (state = initialState, action : UserActionTypes ) => {

    switch(action.type) {
        case START_LOGIN:
            return {...state, loginLoading : true};
        case SUCCESS_LOGIN:
            return {
              ...state,
              loggedIn: true,
              token: (<SuccessLoginAction>action).payload.token,
              username: (<SuccessLoginAction>action).payload.username,
              expirationDate: (<SuccessLoginAction>action).payload.expirationDate,
              loginLoading: false
            };
        case FAILED_LOGIN:
            return {
              ...state,
              loggedIn: false,
              loginLoading: false
            };
        default:
            return state;
    }
};