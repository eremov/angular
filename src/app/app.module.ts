import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoursesModule} from "./features/courses/courses.module";
import {SharedModule} from "./shared/shared.module";
import {LoginModule} from "./features/login/login.module";
import {RegistrationModule} from "./features/registration/registration.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {TokenInterceptor} from "./auth/interceptors/token.interceptor";
import {CourseModule} from "./features/course/course.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CoursesModule,
    CourseModule,
    SharedModule,
    LoginModule,
    RegistrationModule
  ],
  providers: [Window, { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }],

  bootstrap: [AppComponent]
})
export class AppModule {
}
