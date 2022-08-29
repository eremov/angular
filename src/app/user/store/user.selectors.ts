import {UserState} from "./user.reducer";
import {createFeatureSelector, createSelector} from "@ngrx/store";


const getUserState = createFeatureSelector<UserState>('User');

export const getName = createSelector(
  getUserState,
  (state: UserState) => state.name
);

export const isAdmin = createSelector(
  getUserState,
  (state: UserState) => state.isAdmin
);
