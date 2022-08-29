import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {AuthorsState} from "./authors.reducer";
import {getAddedAuthors, getAuthors} from "./authors.selectors";
import {requestAddAuthor, requestAuthors} from "./authors.actions";
import {Author} from "../../services/author";

@Injectable()
export class AuthorsStateFacade {

  public addedAuthor$ = this.store.select(getAuthors);
  public authors$ = this.store.select(getAddedAuthors);

  constructor(private store: Store<AuthorsState>) {
  }

  getAuthors() {
    this.store.dispatch(requestAuthors());
  }

  addAuthor(author: Author) {
    this.store.dispatch(requestAddAuthor({author}));
  }

}

