import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, take} from "rxjs";
import {Authors} from "./author";

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(private http: HttpClient) {

  }

  getAll() {
    return this.http.get<AuthorResponse>('http://localhost:4000/authors/all')
      .pipe(map(response => response.result), take(1))
  }

  addAuthor(authorName: string) {
    this.http.post<any>('http://localhost:4000/authors/add', {name: authorName})
  }
}

interface AuthorResponse {
  successful: boolean;
  result: Authors[]
}

