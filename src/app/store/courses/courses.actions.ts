import {createAction, props} from "@ngrx/store";
import {Course} from "../../services/course";

export const requestAllCourses = createAction(
  '[Courses] requestAllCourses',
);

export const requestAllCoursesSuccess = createAction(
  '[Courses] requestAllCoursesSuccess',
  props<{ courses: Course[] }>()
);

export const requestAllCoursesFail = createAction(
  '[Courses] requestAllCoursesFail',
);

export const requestSingleCourse = createAction(
  '[Courses] requestSingleCourse',
  props<{ id: string }>()

);

export const requestSingleCourseSuccess = createAction(
  '[Courses] requestSingleCourseSuccess',
  props<{ course: Course}>()

);

export const requestSingleCourseFail = createAction(
  '[Courses] requestSingleCourseFail',
);

export const requestFilteredCourses = createAction(
  '[Courses] requestFilteredCourses',
  props<{ searchStr: string }>()

);

export const requestFilteredCoursesSuccess = createAction(
  '[Courses] requestFilteredCoursesSuccess',
  props<{ courses: Course[] }>()
);

export const requestDeleteCourse = createAction(
  '[Courses] requestDeleteCourse',
  props<{ id: string }>()

);

export const requestDeleteCourseFail = createAction(
  '[Courses] requestDeleteCourseFail',
);

export const requestEditCourse = createAction(
  '[Courses] requestEditCourse',
  props<{ id: string, course: Course }>()

);

export const requestEditCourseSuccess = createAction(
  '[Courses] requestEditCourseSuccess',
  props<{ course: Course }>()

);

export const requestEditCourseFail = createAction(
  '[Courses] requestEditCourseFail',
);

export const requestCreateCourse = createAction(
  '[Courses] requestCreateCourse',
  props<{ course: Course }>()

);

export const requestCreateCourseSuccess = createAction(
  '[Courses] requestCreateCourseSuccess',
  props<{ course: Course }>()
);

export const requestCreateCourseFail = createAction(
  '[Courses] requestCreateCourseFail',
);


