import {createAction, props} from "@ngrx/store";

export const requestLogin = createAction(
  '[Auth] requestLogin',
  props<{ email: string, pass: string }>()
);

export const requestLoginSuccess = createAction(
  '[Auth] requestLoginSuccess',
  props<{ token: string }>()
);

export const requestLoginFail = createAction(
  '[Auth] requestLoginFail',
  props<{ errorMessage: string }>()
);

export const requestRegister = createAction(
  '[Auth] requestRegister',
  props<{ email: string, pass: string, name: string }>()
);

export const requestRegisterSuccess = createAction(
  '[Auth] requestRegisterSuccess',
);

export const requestRegisterFail = createAction(
  '[Auth] requestRegisterFail',
);

export const requestLogout = createAction(
  '[Auth] requestLogout',
);

export const requestLogoutSuccess = createAction(
  '[Auth] requestLogoutSuccess',
);
