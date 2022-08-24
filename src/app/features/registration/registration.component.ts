import {Component, OnInit} from '@angular/core';
import {
  AbstractControl,
  FormControl,
  ValidationErrors,
  ValidatorFn,
  Validators
} from "@angular/forms";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../auth/services/auth.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public registrationData = { name: '', password: '', email: '' };
  registrationForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {

  }

  emailValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const forbidden = nameRe.test(control.value);
      return forbidden ? {wrongEmail: {value: control.value}} : null;
    };
  }

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      name: new FormControl(this.registrationData.name, [
        Validators.required,
        Validators.minLength(6)
      ]),
      email: new FormControl(this.registrationData.name, [
        Validators.required,
        Validators.minLength(4),
        this.emailValidator(new RegExp("admin", 'i'))
      ]),
      password: new FormControl(this.registrationData.password, [
        Validators.required,
        Validators.minLength(6)
      ]),
    })
  }


  get name() { return this.registrationForm.get('name')!; }

  get email() { return this.registrationForm.get('email')!; }

  get password() { return this.registrationForm.get('password')!; }

  routeToLoginPage() {
    this.router.navigate(['/login']);
  }

  submitRegistrationData() {
    this.authService.register(this.registrationForm.value.name, this.registrationForm.value.email, this.registrationForm.value.password);
  }

}
