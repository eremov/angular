import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent, ButtonComponent, InfoComponent, SearchComponent } from './components';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {EmailValidatorDirective} from "./validators/email-validator.directive";
import {FormsModule} from "@angular/forms";
import {CreationDatePipe} from "./pipes/creation-date/creation-date.pipe";
import {DurationPipe} from "./pipes/duration/duration.pipe";
import {StringJoinerPipe} from "./pipes/string-joiner/string-joiner.pipe";

const COMPONENTS = [
  HeaderComponent,
  ButtonComponent,
  InfoComponent,
  SearchComponent,
  EmailValidatorDirective,
  CreationDatePipe,
  DurationPipe,
  StringJoinerPipe
]

const IMPORTS = [
  CommonModule,
  FontAwesomeModule,
  FormsModule
]


@NgModule({
  declarations: COMPONENTS,
  imports: IMPORTS,
  exports: COMPONENTS
})
export class SharedModule {

}

