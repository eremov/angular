import {UserState} from "../../user/store/user.reducer";
import {Action, createReducer, on} from "@ngrx/store";
import {requestCurrentUser, requestCurrentUserFail, requestCurrentUserSuccess} from "../../user/store/user.actions";
import {
  requestLogin,
  requestLoginFail,
  requestLoginSuccess, requestLogout, requestLogoutSuccess,
  requestRegister, requestRegisterFail,
  requestRegisterSuccess
} from "./auth.actions";

export const authFeatureKey  = 'Auth';

export interface AuthState {
  isAuthorized: boolean;
  token: string;
  errorMessage: string;
}

let initialState: AuthState = {
  isAuthorized: false,
  token: '',
  errorMessage: ''
};

export const reducer = createReducer(
  initialState,
  on(requestLogin, state => ({...state})),
  on(requestLoginSuccess, state => ({...state})),
  on(requestLoginFail, (state) => ({...state})),
  on(requestRegister, (state) => ({...state})),
  on(requestRegisterSuccess, (state) => ({...state})),
  on(requestRegisterFail, (state) => ({...state})),
  on(requestLogout, (state) => ({...state})),
  on(requestLogoutSuccess, (state) => ({...state})),
);

export const authReducer = (state: AuthState, action: Action): AuthState => reducer(state, action);

