import { NgModule } from '@angular/core';
import {SharedModule} from "../../shared/shared.module";
import {CoursesComponent} from "./courses.component";


@NgModule({
  declarations: [CoursesComponent],
  imports: [
    SharedModule
  ],
  exports: [
    CoursesComponent
  ]
})
export class CoursesModule { }
