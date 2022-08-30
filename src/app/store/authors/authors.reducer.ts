import {Author} from "../../services/author";
import {Action, createReducer, on} from "@ngrx/store";
import {
  requestAddAuthor,
  requestAddAuthorFail, requestAddAuthorSuccess, requestAuthors,
  requestAuthorsFail,
  requestAuthorsSuccess,
  resetAddedAuthor
} from "./authors.actions";

export const authorsFeatureKey  = 'Authors'

export interface AuthorsState  {
  authors: Author[];
  addedAuthor: Author;
}

let initialState: AuthorsState = {
  authors: [],
  addedAuthor: {
    id: '',
    name: ''
  }
}

export const reducer = createReducer(
  initialState,
  on(requestAuthors, state => ({ ...state })),
  on(requestAuthorsSuccess, state => ({ ...state })),
  on(requestAuthorsFail, state => ({ ...state })),
  on(requestAddAuthor, state => ({ ...state })),
  on(requestAddAuthorSuccess, state => ({ ...state })),
  on(requestAddAuthorFail, state => ({ ...state })),
  on(resetAddedAuthor, state => ({ ...state }))
);

export const authorsReducer = (state: AuthorsState, action: Action): AuthorsState => reducer(state, action);
