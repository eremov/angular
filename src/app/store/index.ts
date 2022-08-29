import { ActionReducerMap } from '@ngrx/store';
import {userReducer, UserState} from "../user/store/user.reducer";
import {UserEffects} from "../user/store/user.effects";
import {authReducer, AuthState} from "../auth/store/auth.reducer";
import {AuthEffects} from "../auth/store/auth.effects";

export interface State {
  userState: UserState;
  authState: AuthState;
}

export const reducers: ActionReducerMap<any> = {
  userState: userReducer,
  authState: authReducer
};

export const effects: any[] = [UserEffects, AuthEffects];
