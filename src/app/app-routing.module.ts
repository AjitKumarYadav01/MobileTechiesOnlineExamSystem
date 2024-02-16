import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { DashbaordComponent } from './components/dashbaord/dashbaord.component';
import { ExamComponent } from './components/exam/exam.component';
import { ExamformComponent } from './components/examform/examform.component';
import { AttemptExamComponent } from './components/attempt-exam/attempt-exam.component';
import { MainExamComponent } from './components/main-exam/main-exam.component';
import { ExamTypeComponent } from './components/exam-type/exam-type.component';
import { ExamInstructComponent } from './components/exam-instruct/exam-instruct.component';
import { AuthGuard } from './guards/auth.guard';
import { UserListComponent } from './components/user-list/user-list.component';

const routes: Routes = [
  { path: '', component: DashbaordComponent, canActivate: [AuthGuard]},
  { path: '', redirectTo: 'login',  pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'registration', component: RegistrationComponent},
  {path:'exam', component: ExamComponent},
  {path:'examform', component: ExamformComponent},
  {path:'attemptExam', component: AttemptExamComponent},
  {path:'main-exam', component: MainExamComponent},
  {path:'examType', component: ExamTypeComponent},
  {path:'exam-instruct', component: ExamInstructComponent},
  {path:'user-list', component: UserListComponent},

  //{path: 'auth-guard', component: AuthGuard},
  //{ path: '', component: DashbaordComponent, canActivate: [AuthGuard] }
 // { path: '', component: DashbaordComponent, canActivate: [() => { return false;}] }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
