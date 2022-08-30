import {createAction, props} from "@ngrx/store";
import {Author} from "../../services/author";

export const requestAuthors = createAction(
  '[Authors] requestAuthors',
);

export const requestAuthorsSuccess = createAction(
  '[Authors] requestAuthorsSuccess',
  props<{
    authors: Author[]
  }>()
);

export const requestAuthorsFail = createAction(
  '[Authors] requestAuthorsFail',
);

export const requestAddAuthor = createAction(
  '[Authors] requestAddAuthor',
  props<{ author: Author }>()
);

export const requestAddAuthorSuccess = createAction(
  '[Authors] requestAddAuthorSuccess',
  props<{ author: Author }>()
);

export const requestAddAuthorFail = createAction(
  '[Authors] requestAddAuthorFail',
);

export const resetAddedAuthor = createAction(
  '[Authors] resetAddedAuthor',
  props<{ id: string }>()
);
