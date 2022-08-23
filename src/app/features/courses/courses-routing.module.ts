import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoursesComponent} from "./courses.component";
import {EditPageComponent} from "./edit-page/edit-page.component";
import {CourseCardComponent} from "./course-card/course-card.component";
import {AdminGuard} from "../../auth/guards/admin.guard";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: CoursesComponent
      },
      {
        path: 'edit/:id',
        canActivate: [AdminGuard],
        component: EditPageComponent,
      },
      {
        path: 'add',
        canActivate: [AdminGuard],
        component: EditPageComponent,
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
