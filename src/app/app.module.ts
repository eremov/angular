import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoursesModule} from "./features/courses/courses.module";
import {SharedModule} from "./shared/shared.module";
import {LoginModule} from "./features/login/login.module";
import {RegistrationModule} from "./features/registration/registration.module";
import { EditPageComponent } from './features/courses/edit-page/edit-page.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    EditPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CoursesModule,
    SharedModule,
    LoginModule,
    RegistrationModule
  ],
  providers: [Window],
  bootstrap: [AppComponent]
})
export class AppModule {
}
