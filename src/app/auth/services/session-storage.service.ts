import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  SESSION_TOKEN: string = 'session-token';

  private window: Window;

  constructor(@Inject(DOCUMENT) private document: Document) {
    // @ts-ignore
    this.window = this.document.defaultView;
  }

  public setToken(token: string) {
    window.sessionStorage.setItem(this.SESSION_TOKEN, token)
  }

  public getToken(): string {
    // @ts-ignore
    return window.sessionStorage.getItem(this.SESSION_TOKEN);
  }

  public deleteToken() {
    window.sessionStorage.removeItem(this.SESSION_TOKEN);
  }
}
