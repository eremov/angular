import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn} from "@angular/forms";

@Directive({
  selector: '[appCheckEmail]',
  providers: [{ provide: NG_VALIDATORS, useExisting: EmailValidatorDirective, multi: true }]
})
export class EmailValidatorDirective implements Validator{
  @Input('appCheckEmail') appCheckEmail = '';
  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    return this.appCheckEmail ? EmailValidatorDirective.emailValidator(new RegExp(this.appCheckEmail, 'i'))(control)
      : null;
  }

  public static emailValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const forbidden = nameRe.test(control.value);
      return forbidden ? {wrongEmail: {value: control.value}} : null;
    };
  }


}
