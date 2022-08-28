import {Component, OnInit} from '@angular/core';
import {AuthService} from "./auth/services/auth.service";
import {UserStoreService} from "./user/services/user-store.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'courses-app';
  userName: string;
  headerButton: string;
  loginButtonText: string = 'Login';
  logoutButtonText: string = 'Logout'
  isAdmin: boolean = false;

  constructor(private authService: AuthService, private userStoreService: UserStoreService, private router: Router) {

  }

  public ngOnInit(): void {
    this.authService.isAuthorized$.subscribe(value => {
      if (value) {
        this.userStoreService.getUser();
        this.userStoreService.name$.subscribe(
          name => {
            this.userName = name;
          }
        )
        this.headerButton = this.logoutButtonText;
        this.userStoreService.isAdmin$.subscribe(isAdmin => {
          if (isAdmin) {
            this.isAdmin = isAdmin;
          }
        })
      } else {
        this.userName = '';
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

  redirectToNewCoursePage() {
    this.router.navigate(['/course/add']);
  }
}
