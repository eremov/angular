import {Action, createReducer, on} from "@ngrx/store";
import {requestCurrentUser, requestCurrentUserFail, requestCurrentUserSuccess} from "./user.actions";

export const userFeatureKey = 'User'

export interface UserState {
  name: string;
  isAdmin: boolean;
}

let initialState: UserState = {
  name: '',
  isAdmin: false
};

export const reducer = createReducer(
  initialState,
  on(requestCurrentUser, state => ({...state})),
  on(requestCurrentUserSuccess, (state, {user}) => ({
    ...state,
    name: user.name,
    isAdmin: user.role === 'admin'
  })),
  on(requestCurrentUserFail, (state) => ({...state}))
);

export const userReducer = (state: UserState, action: Action): UserState => reducer(state, action);
