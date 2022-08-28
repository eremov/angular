import {Component, OnInit} from '@angular/core';
import {AuthService} from "./auth/services/auth.service";
import {UserStoreService} from "./user/services/user-store.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  userName: Observable<string> = this.userStoreService.name$;
  isAdmin: Observable<boolean> = this.userStoreService.isAdmin$;

  title = 'courses-app';
  headerButton: string;
  loginButtonText: string = 'Login';
  logoutButtonText: string = 'Logout'

  constructor(private authService: AuthService, private userStoreService: UserStoreService, private router: Router) {

  }

  public ngOnInit(): void {
    this.authService.isAuthorized$.subscribe(value => {
      if (value) {
        this.userStoreService.getUser();
        this.headerButton = this.logoutButtonText;
      } else {
        this.headerButton = this.loginButtonText;
      }
    })
  }

  buttonClickEvent() {
    if (this.headerButton === 'Login') {
      this.router.navigate(['/login'])
    }
    if (this.headerButton === 'Logout') {
      this.authService.logout();
    }
  }
}
