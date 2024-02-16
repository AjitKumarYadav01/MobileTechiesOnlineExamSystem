import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DashbaordComponent } from './components/dashbaord/dashbaord.component';
import { ExamComponent } from './components/exam/exam.component';
import { ExamformComponent } from './components/examform/examform.component';
import { AttemptExamComponent } from './components/attempt-exam/attempt-exam.component';
import { MainExamComponent } from './components/main-exam/main-exam.component';
import { ExamTypeComponent } from './components/exam-type/exam-type.component';
import { ExamInstructComponent } from './components/exam-instruct/exam-instruct.component';
import { NgToastModule } from 'ng-angular-popup';
import { UserListComponent } from './components/user-list/user-list.component';
import { Token } from '@angular/compiler';
import { TokenInterceptor } from './interceptors/token.interceptor';
//import { LibNgToastModule } from 'path-to-lib-ng-toast';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    RegistrationComponent,
    DashbaordComponent,
    ExamComponent,
    ExamformComponent,
    AttemptExamComponent,
    MainExamComponent,
    ExamTypeComponent,
    ExamInstructComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgToastModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
