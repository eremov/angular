import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "./user";
import {map, take} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {

  }

  getUser() {
    return this.http.get<UserResponse>('http://localhost:4000/users/me')
      .pipe(map(response => response.result), take(1))
  }
}

interface UserResponse {
  successful: boolean;
  result: User;
}
