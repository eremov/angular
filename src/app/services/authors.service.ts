import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, take} from "rxjs";
import {Author} from "./author";

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(private http: HttpClient) {

  }

  getAll() {
    return this.http.get<AuthorsResponse>('http://localhost:4000/authors/all')
      .pipe(map(response => response.result), take(1))
  }

  addAuthor(authorName: string) {
    this.http.post<any>('http://localhost:4000/authors/add', {name: authorName})
  }
}

interface AuthorsResponse {
  successful: boolean;
  result: Author[];
}

interface AuthorResponse {
  successful: boolean;
  result: Author;
}

