import { START_USERNAME_CHANGE, USERNAME_CHANGE } from '../types/user.types';


export const changeUsernameAction = (username : string) => ({
    type : USERNAME_CHANGE,
    payload : {
        username : username
    }
})


export const startChangeUsernameAction = () => ({
    type : START_USERNAME_CHANGE
})



