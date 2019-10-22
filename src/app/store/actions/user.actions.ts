import { START_LOGIN, SUCCESS_LOGIN, FAILED_LOGIN, START_LOGIN_LOADING } from '../types/user.types';


export const startLoginAction = (username : string, password : string) => ({
    type : START_LOGIN,
    payload : {
        username, 
        password
    }
});

export const successLoginAction = (username : string, token : string, expirationDate : Date) => ({
    type : SUCCESS_LOGIN,
    payload : {
        username,
        token, 
        expirationDate
    }
});

export const failedLoginAction = () => ({
    type : FAILED_LOGIN
})
