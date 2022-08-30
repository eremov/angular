import {createFeatureSelector, createSelector} from "@ngrx/store";
import {authorsFeatureKey, AuthorsState} from "./authors.reducer";


const getAuthorsState = createFeatureSelector<AuthorsState>(authorsFeatureKey);

export const getAddedAuthors = createSelector(
  getAuthorsState,
  (state: AuthorsState) => state.addedAuthor
);

export const getAuthors = createSelector(
  getAuthorsState,
  (state: AuthorsState) => state.authors
);
