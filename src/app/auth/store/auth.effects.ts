import {Injectable} from "@angular/core";
import {Actions, concatLatestFrom, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, mergeMap, of, tap} from "rxjs";
import {AuthService} from "../services/auth.service";
import {requestLogin, requestLoginFail, requestLoginSuccess} from "./auth.actions";

@Injectable()
export class AuthEffects {
  login$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(requestLogin),
        mergeMap(({email, pass}) => this.authService.login(email, pass)
          .pipe(
            map(token => (requestLoginSuccess({token}))),
            catchError((errorMessage) => of(requestLoginFail({errorMessage})))
          )
        )
      );
    }
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService
  ) {
  }
}
