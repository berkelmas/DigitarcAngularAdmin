import { OPEN_SIDENAV, CLOSE_SIDENAV } from '../../types/ui.types';

export interface UiState {
    sidenav : boolean;
};

const initialState : UiState = {
    sidenav : true
};

export const UiReducer = (state= initialState, action) => {

    switch(action.type) {
        case OPEN_SIDENAV:
            return {...state, sidenav : true};
        case CLOSE_SIDENAV:
            return {...state, sidenav : false};
        default:
            return state;
    }
}