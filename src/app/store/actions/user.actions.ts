import {
  START_LOGIN,
  SUCCESS_LOGIN,
  FAILED_LOGIN,
  START_LOGIN_LOADING,
  LOGOUT,
  VERIFY_LOGIN
} from "../types/user.types";
import { Action } from "@ngrx/store";

export class StartLoginAction implements Action {
  readonly type: string = START_LOGIN;

  constructor(
    public payload: {
      username: string;
      password: string;
    }
  ) {}
}

export class SuccessLoginAction implements Action {
  readonly type: string = SUCCESS_LOGIN;

  constructor(
    public payload: {
      username: string;
      token: string;
      expirationDate: Date;
    }
  ) {}
}

export class FailedLoginAction implements Action {
  readonly type: string = FAILED_LOGIN;

  constructor(public payload: string = null) {}
}

export class VerifyLoginAction implements Action {
  readonly type: string = VERIFY_LOGIN;

  constructor(
    public payload: {
      localStorageItem: string;
      currentPath: string;
    }
  ) {}
}

export class LogoutAction implements Action {
  readonly type: string = LOGOUT;

  constructor(public payload: string) {}
}

export type UserActionTypes =
  | SuccessLoginAction
  | FailedLoginAction
  | StartLoginAction
  | LogoutAction
  | VerifyLoginAction;
