import {createAction, props} from '@ngrx/store';
import {User} from "../services/user";

export const requestCurrentUser = createAction(
  '[User] requestCurrentUser',
);

export const requestCurrentUserSuccess = createAction(
  '[User] requestCurrentUserSuccess',
  props<{ user: User }>()
);

export const requestCurrentUserFail = createAction(
  '[User] requestCurrentUserFail',
);
