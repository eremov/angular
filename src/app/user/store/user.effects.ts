import {Injectable} from "@angular/core";
import {Actions, concatLatestFrom, createEffect, ofType} from "@ngrx/effects";
import {UserService} from "../services/user.service";
import {requestCurrentUser, requestCurrentUserFail, requestCurrentUserSuccess} from "./user.actions";
import {catchError, map, mergeMap, of, tap} from "rxjs";

@Injectable()
export class UserEffects {
  getCurrentUser = createEffect(
    () =>
      this.actions$.pipe(
        ofType(requestCurrentUser),
        mergeMap(() => this.userService.getUser()
          .pipe(
            map(user => (requestCurrentUserSuccess({user}))),
            catchError(() => of(requestCurrentUserFail()))
          )
        )
      )
  );

  constructor(private userService: UserService, private actions$: Actions) {
  }
}
