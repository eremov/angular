import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RegistrationComponent} from "./registration.component";
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";
import {RegistrationRoutingModule} from "./registration-routing.module";

@NgModule({
  declarations: [RegistrationComponent],
  exports: [
    RegistrationComponent,
    ReactiveFormsModule
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    RegistrationRoutingModule
  ]
})
export class RegistrationModule { }
