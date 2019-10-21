import { USERNAME_CHANGE } from '../../types/user.types';

const initialState : UserState = {
    username : 'Berk Elmas'
}

export interface UserState {
    username : string;
};

export const UserReducer = (state = initialState, action ) => {

    switch(action.type) {
        case USERNAME_CHANGE:
            return {...state, username : action.payload.username};
        default:
            return state;
    }
};