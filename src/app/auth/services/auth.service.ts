import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {SessionStorageService} from "./session-storage.service";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthorized$$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isAuthorized$: Observable<boolean> = this.isAuthorized$$.asObservable();

  sessionStorageService: SessionStorageService;

  constructor(private http: HttpClient, private sessionStorage: SessionStorageService) {
    this.sessionStorageService = sessionStorage;
  }

  login(email: string, password: string) {
    this.http.post<any>('http://localhost:4000/login',
      {
        "name": null,
        "email": email,
        "password": password
      }
    ).subscribe(data => {
      this.sessionStorageService.setToken(data.result.split(' ')[1]);
      this.isAuthorized$$.next(true);
    })
  }

  register(name: string, email: string, password: string) {
    this.http.post<any>('http://localhost:4000/register',
      {
        "name": name,
        "email": email,
        "password": password
      }
    )
  }

  logout() {
    let headers = new HttpHeaders().set('Authorization', this.sessionStorageService.getToken());
    this.http.delete<string>('http://localhost:4000/logout',{'headers': headers})
      .subscribe(
        data => {
          this.sessionStorageService.deleteToken();
          this.isAuthorized$$.next(false);
        },
        (err: HttpErrorResponse) => console.log(`Got error: ${err}`)
      );
  }
}
