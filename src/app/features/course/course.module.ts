import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CourseComponent} from "./course.component";
import {SharedModule} from "../../shared/shared.module";
import {ReactiveFormsModule} from "@angular/forms";
import {CourseRoutingModule} from "./course-routing.module";

@NgModule({
  declarations: [CourseComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    CourseRoutingModule
  ]
})
export class CourseModule { }
