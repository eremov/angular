import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoursesComponent} from "./courses.component";
import {CourseCardComponent} from "./course-card/course-card.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: CoursesComponent
      },
      {
        path: ':id',
        component: CourseCardComponent,
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
