import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {AuthState} from "./auth.reducer";
import {getSpecificErrorMessage, getToken, isUserAuthorized} from "./auth.selectors";
import {User} from "../../user/services/user";
import {
  requestLogin,
  requestLoginSuccess,
  requestLogout,
  requestLogoutSuccess,
  requestRegister,
} from "./auth.actions";
import {SessionStorageService} from "../services/session-storage.service";

@Injectable()
export class AuthStateFacade  {

  public isAuthorized$ = this.store.select(isUserAuthorized);
  public getToken$ = this.store.select(getToken);
  public getLoginErrorMessage$ = this.store.select(getSpecificErrorMessage);
  public getRegisterErrorMessage$ = this.store.select(getSpecificErrorMessage);

  constructor(private store: Store<AuthState>,  private sessionStorageService: SessionStorageService) {
  }

  login(body: User) {
    this.store.dispatch(requestLogin({
      email: body.email,
      pass: body.password
    }));
  }

  register(body: User) {
    this.store.dispatch(requestRegister({
      email: body.email,
      pass: body.password,
      name: body.name
    }));
  }

  logout() {
    this.store.dispatch(requestLogout());
  }

  closeSession() {
    this.store.dispatch(requestLogoutSuccess());
  }

  setAuthorization() {
    this.store.dispatch(requestLoginSuccess({token: this.sessionStorageService.getToken()}));
  }

}

