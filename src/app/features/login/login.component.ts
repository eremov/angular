import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../auth/services/auth.service";
import {NgModel} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private auth: AuthService) {

  }

  ngOnInit(): void {
  }

  submitForm(email: NgModel, pass: NgModel) {
    this.auth.login(email.viewModel, pass.viewModel);
  }

}
