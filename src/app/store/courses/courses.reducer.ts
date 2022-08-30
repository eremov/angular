import {Course} from "../../services/course";
import {Action, createReducer, on} from "@ngrx/store";
import {
  requestAllCourses,
  requestAllCoursesFail, requestAllCoursesSuccess,
  requestCreateCourse, requestCreateCourseFail,
  requestCreateCourseSuccess,
  requestDeleteCourse,
  requestDeleteCourseFail,
  requestEditCourse,
  requestEditCourseFail,
  requestEditCourseSuccess,
  requestFilteredCourses,
  requestFilteredCoursesSuccess,
  requestSingleCourse, requestSingleCourseFail,
  requestSingleCourseSuccess
} from "./courses.actions";

export const coursesFeatureKey  = 'Courses';

export interface CoursesState  {
  allCourses: Course[];
  courses: Course[];
  course: Course;
  isAllCoursesLoading: boolean;
  isSingleCourseLoading: boolean;
  isSearchState: boolean;
  errorMessage: string;
}


let initialState: CoursesState = {
  allCourses: [],
  courses: [],
  course: {
    title: '',
    description: '',
    creationDate: '',
    duration: 0,
    authors: [],
    id: ''
  },
  isAllCoursesLoading: false,
  isSingleCourseLoading: false,
  isSearchState: false,
  errorMessage: ''
}

export const reducer = createReducer(
  initialState,
  on(requestAllCourses, state => ({ ...state })),
  on(requestAllCoursesSuccess, (state, { courses }) => ({ ...state, allCourses: courses })),
  on(requestAllCoursesFail, state => ({ ...state })),
  on(requestSingleCourse, state => ({ ...state })),
  on(requestSingleCourseSuccess, (state, { course }) => ({ ...state, course: course })),
  on(requestSingleCourseFail, state => ({ ...state })),
  on(requestFilteredCourses, state => ({ ...state })),
  on(requestFilteredCoursesSuccess, (state, { courses }) => ({ ...state, courses: courses })),
  on(requestDeleteCourse, state => ({ ...state })),
  on(requestDeleteCourseFail, state => ({ ...state })),
  on(requestEditCourse, state => ({ ...state })),
  on(requestEditCourseSuccess, (state, { course }) => ({ ...state, course: course })),
  on(requestEditCourseFail, state => ({ ...state })),
  on(requestCreateCourse, state => ({ ...state })),
  on(requestCreateCourseSuccess, (state, { course }) => ({ ...state, course: course })),
  on(requestCreateCourseFail, state => ({ ...state }))
);

export const coursesReducer = (state: CoursesState, action: Action): CoursesState => reducer(state, action);
