import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, mergeMap, of} from "rxjs";
import {AuthorsService} from "../../services/authors.service";
import {
  requestAddAuthor, requestAddAuthorFail,
  requestAddAuthorSuccess,
  requestAuthors,
  requestAuthorsFail,
  requestAuthorsSuccess
} from "./authors.actions";

@Injectable()
export class AuthorsEffects {
  getAuthors$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(requestAuthors),
        mergeMap(() => this.authorsService.getAll()
          .pipe(
            map(authors => (requestAuthorsSuccess({ authors }))),
            catchError(() => of(requestAuthorsFail()))
          )
        )
      );
    }
  );

  addAuthor$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(requestAddAuthor),
        mergeMap((author) => this.authorsService.addAuthor(author.author.name)
          .pipe(
            map(author => (requestAddAuthorSuccess({ author }))),
            catchError(() => of(requestAddAuthorFail()))
          )
        )
      );
    }
  );

  constructor(
    private actions$: Actions,
    private authorsService: AuthorsService
  ) {
  }
}
