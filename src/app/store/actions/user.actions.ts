import { START_LOGIN, SUCCESS_LOGIN, FAILED_LOGIN, START_LOGIN_LOADING } from '../types/user.types';


export const startLoginAction = () => ({
    type : START_LOGIN
});

export const successLoginAction = (username : string, token : string, expirationDate : Date) => ({
    type : SUCCESS_LOGIN,
    payload : {
        username,
        token, 
        expirationDate
    }
});

