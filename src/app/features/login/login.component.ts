import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../auth/services/auth.service";
import {NgModel} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  constructor(private auth: AuthService, private router: Router) {

  }

  submitForm(email: NgModel, pass: NgModel) {
    this.auth.login(email.viewModel, pass.viewModel);
    this.router.navigate(['/courses']);
  }

  routeToRegistrationPage() {
    this.router.navigate(['/registration']);
  }
}
