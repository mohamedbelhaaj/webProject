import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './User/user-login/user-login.component';
import {  StudentComponent } from './student/student.component';
import { CoursComponent } from './cours/cours.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuestionComponent } from './question/question.component';
import { EnseigantsComponent } from './enseigants/enseigants.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {path:'layout' , component:LayoutComponent },

  {path: 'user-login' ,  component:UserLoginComponent},
  {path:'user-login', redirectTo:'user-login' , pathMatch:'full'},
  {path:'dashboard', component:DashboardComponent},


  {path:'student',component:StudentComponent},





  {path:'enseigant',component:EnseigantsComponent},
  {path:'cour',component:CoursComponent},
  {path:'chatbot',component:ChatbotComponent},
  {path:'quiz',component:QuizComponent},
  {path:'question',component:QuestionComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
