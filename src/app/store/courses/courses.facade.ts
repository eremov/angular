import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {CoursesState} from "./courses.reducer";
import {
  getAllCourses, getCourse,
  getCourses, getErrorMessage,
  isAllCoursesLoadingSelector,
  isSearchingStateSelector,
  isSingleCourseLoadingSelector
} from "./courses.selectors";
import {
  requestAllCourses, requestCreateCourse,
  requestDeleteCourse,
  requestEditCourse,
  requestFilteredCourses,
  requestSingleCourse
} from "./courses.actions";
import {Course} from "../../services/course";

@Injectable()
export class CoursesStateFacade {

  public isAllCoursesLoading$ = this.store.select(isAllCoursesLoadingSelector);
  public isSingleCourseLoading$ = this.store.select(isSingleCourseLoadingSelector);
  public isSearchingState$ = this.store.select(isSearchingStateSelector);
  public courses$ = this.store.select(getCourses);
  public allCourses$ = this.store.select(getAllCourses);
  public course$ = this.store.select(getCourse);
  public errorMessage$ = this.store.select(getErrorMessage);

  constructor(private store: Store<CoursesState>) {
  }

  getAllCourses() {
    this.store.dispatch(requestAllCourses());
  }

  getSingleCourse(id: string) {
    this.store.dispatch(requestSingleCourse({ id }));
  }

  getFilteredCourses(searchStr: string) {
    this.store.dispatch(requestFilteredCourses({ searchStr }));
  }

  editCourse(course: Course, id: string) {
    this.store.dispatch(requestEditCourse({ id, course }));
  }

  createCourse(course: Course) {
    this.store.dispatch(requestCreateCourse({ course }));
  }

  deleteCourse(id: string) {
    this.store.dispatch(requestDeleteCourse({ id }));
  }

}

