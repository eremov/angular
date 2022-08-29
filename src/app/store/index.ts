import { ActionReducerMap } from '@ngrx/store';
import {userReducer, UserState} from "../user/store/user.reducer";
import {UserEffects} from "../user/store/user.effects";

export interface State {
  userState: UserState;
}

export const reducers: ActionReducerMap<any> = {
  userState: userReducer,
};

export const effects: any[] = [UserEffects];
