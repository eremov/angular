import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('../app/features/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'registration',
    loadChildren: () => import('../app/features/registration/registration.module').then(m => m.RegistrationModule),
  },
  {
    path: '',
    loadChildren: () => import('../app/features/courses/courses.module').then(m => m.CoursesModule),
  },
  {
    path: 'courses',
    loadChildren: () => import('../app/features/courses/courses.module').then(m => m.CoursesModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
