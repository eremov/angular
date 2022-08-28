import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminGuard} from "../../auth/guards/admin.guard";
import {CourseComponent} from "./course.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'edit/:id',
        canActivate: [AdminGuard],
        component: CourseComponent,
      },
      {
        path: 'add',
        canActivate: [AdminGuard],
        component: CourseComponent,
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
