import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CoursesComponent} from "./features/courses/courses.component";
import {AuthorizedGuard} from "./auth/guards/authorized.guard";
import {NotAuthorizedGuard} from "./auth/guards/not-authorized.guard";
import {AdminGuard} from "./auth/guards/admin.guard";
import {EditPageComponent} from "./features/courses/edit-page/edit-page.component";
import {CourseComponent} from "./features/course/course.component";

const routes: Routes = [
  {
    path: 'login',
    canActivate: [NotAuthorizedGuard],
    loadChildren: () => import('../app/features/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'registration',
    canActivate: [NotAuthorizedGuard],
    loadChildren: () => import('../app/features/registration/registration.module').then(m => m.RegistrationModule),
  },
  {
    path: 'courses',
    canLoad: [AuthorizedGuard],
    loadChildren: () => import('../app/features/courses/courses.module').then(m => m.CoursesModule),
  },
  {
    path: 'course',
    canActivate: [AdminGuard],
    loadChildren: () => import('../app/features/course/course.module').then(m => m.CourseModule),
  },
  {
    path: '',
    component: CoursesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
