import { NgModule } from '@angular/core';
import {SharedModule} from "../../shared/shared.module";
import {CoursesComponent} from "./courses.component";
import { CourseCardComponent } from './course-card/course-card.component';
import { CourseListComponent } from './course-list/course-list.component';
import {CoursesRoutingModule} from "./courses-routing.module";

@NgModule({
  declarations: [CoursesComponent, CourseCardComponent, CourseListComponent],
  imports: [
    SharedModule,
    CoursesRoutingModule
  ],
  exports: [
    CoursesComponent
  ]
})
export class CoursesModule { }
