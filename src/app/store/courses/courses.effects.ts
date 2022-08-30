import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, filter, map, mergeAll, mergeMap, of} from "rxjs";
import {CoursesService} from "../../services/courses.service";
import {AuthorsStateFacade} from "../authors/authors.facade";
import {
  requestAllCourses,
  requestAllCoursesFail,
  requestAllCoursesSuccess,
  requestFilteredCourses, requestFilteredCoursesSuccess
} from "./courses.actions";
import {CoursesStateFacade} from "./courses.facade";

@Injectable()
export class CoursesEffects {
  getAll$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(requestAllCourses),
        mergeMap(() => this.coursesService.getAll()
          .pipe(
            map(course => {
              this.authorsStateFacade.authors$.subscribe(authors => {
                  course.forEach((element, index, array) => {
                    let authorNames: string[] = [];
                    element.authors.forEach((courseAuthors, index, array) => {
                      let author = authors.find(author => author.id === courseAuthors) ?? {id:'', name: ''};
                      authorNames.push(author.name);
                    })
                    element.authors = authorNames;
                  })
                }
              )
              return course;
            }),
            map(courses => (requestAllCoursesSuccess({ courses }))),
            catchError(() => of(requestAllCoursesFail()))
          )
        )
      );
    }
  );

  filteredCourse$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(requestFilteredCourses),
        mergeMap((action) => this.coursesStateFacade.allCourses$
          .pipe(
            map(courses => {
              return courses.filter(value => value.title.includes(action.searchStr));
            }),
            map(courses => (requestFilteredCoursesSuccess({ courses }))),
          )
        )
      );
    }
  );



  constructor(
    private actions$: Actions,
    private coursesService: CoursesService,
    private authorsStateFacade: AuthorsStateFacade,
    private coursesStateFacade: CoursesStateFacade
  ) {
  }
}
