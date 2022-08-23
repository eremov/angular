import { Injectable } from '@angular/core';
import {AuthorsService} from "./authors.service";
import {BehaviorSubject, Observable} from "rxjs";
import {Author} from "./author";

@Injectable({
  providedIn: 'root'
})
export class AuthorsStoreService {

  private isLoading$$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isLoading$: Observable<boolean> = this.isLoading$$.asObservable();

  private authors$$: BehaviorSubject<Author[]> = new BehaviorSubject<Author[]>([]);
  public authors$: Observable<Author[]> = this.authors$$.asObservable();


  constructor(private authorsService: AuthorsService) { }

  getAll() {
    this.isLoading$$.next(true);

    this.authorsService.getAll().subscribe(authors => {
        this.authors$$.next(authors);
        this.isLoading$$.next(false);
      })
  }

  addAuthor(authorName: string) {
    this.authorsService.addAuthor(authorName);
  }
}
