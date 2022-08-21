import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoursesComponent} from "./courses.component";
import {EditPageComponent} from "./edit-page/edit-page.component";
import {CourseCardComponent} from "./course-card/course-card.component";

const routes: Routes = [
  {
    path: 'edit/:id',
    component: EditPageComponent
  },
  {
    path: 'add',
    component: EditPageComponent
  },
  {
    path: '',
    component: CoursesComponent
  },
  {
    path: ':id',
    component: CourseCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
