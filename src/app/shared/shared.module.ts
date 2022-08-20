import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent, ButtonComponent, InfoComponent, SearchComponent } from './components';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {EmailValidatorDirective} from "./email-validator.directive";
import {FormsModule} from "@angular/forms";
import {CreationDatePipe} from "./pipes/creation-date/creation-date.pipe";
import {DurationPipe} from "./pipes/duration/duration.pipe";
import {StringJoinerPipe} from "./pipes/string-joiner/string-joiner.pipe";

const DECLARATIONS = [
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

const EXPORTS = [...DECLARATIONS, ...IMPORTS];

@NgModule({
  declarations: DECLARATIONS,
    imports: IMPORTS,
  exports: EXPORTS
})
export class SharedModule {

}

