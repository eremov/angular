import { ActionReducerMap } from '@ngrx/store';
import {userReducer, UserState} from "../user/store/user.reducer";
import {UserEffects} from "../user/store/user.effects";
import {authReducer, AuthState} from "../auth/store/auth.reducer";
import {AuthEffects} from "../auth/store/auth.effects";
import {authorsReducer, AuthorsState} from "./authors/authors.reducer";
import {AuthorsEffects} from "./authors/authors.effects";

export interface State {
  userState: UserState;
  authState: AuthState;
  authorState: AuthorsState;
}

export const reducers: ActionReducerMap<any> = {
  userState: userReducer,
  authState: authReducer,
  authorsState: authorsReducer
};

export const effects: any[] = [UserEffects, AuthEffects, AuthorsEffects];
