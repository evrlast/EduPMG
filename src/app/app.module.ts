import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './components/app-page/app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {AppRoutingModule} from "./app-routing.module";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatExpansionModule} from "@angular/material/expansion";
import {LoginComponent} from './components/login/login.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {RegisterComponent} from './components/register/register.component';
import {AuthorisationService} from "./services/authorisation.service";
import {AuthGuard} from "./guard/auth.guard";
import {TokenInjectorInterceptor} from "./interceptor/token-injector.interceptor";
import {StudentModule} from "./student/student.module";
import {TeacherModule} from "./teacher/teacher.module";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatSidenavModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule,
    HttpClientModule,
    StudentModule,
    TeacherModule,
  ],
  providers: [
    AuthorisationService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInjectorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
