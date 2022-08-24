import { Injectable } from '@angular/core';
import {CanLoad, Route, Router, UrlSegment, UrlTree} from '@angular/router';
import {map, Observable} from 'rxjs';
import {AuthService} from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthorizedGuard implements CanLoad {
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.isAuthorized$.pipe(
      // map(isLogged => isLogged ? true : this.router.parseUrl('/login'))
      map((value) => {
        if (value) {
          return true;
        }
        console.log("ororororo: " + value)
        return this.router.parseUrl('/login');
      }));
  }

  constructor(private authService: AuthService, private router: Router) {
  }
}
