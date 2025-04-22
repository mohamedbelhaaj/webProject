import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './User/user-login/user-login.component';
import {  StudentComponent } from './student/student.component';
import { CoursComponent } from './cours/cours.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuestionComponent } from './question/question.component';
import { HomeComponent } from './home/home.component';
import { EnseigantsComponent } from './enseigants/enseigants.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full',
  },
  
  {
    path:'user-login',
    component:UserLoginComponent,
  

  },
    {path:'dashboard', component:DashboardComponent},
    {path:'',redirectTo:'home',  pathMatch:'full'},
    {path:'home', component:HomeComponent},
  {
    path:'student',
    component:StudentComponent,
  },
  {
  path:'',
  redirectTo:'cour',
  pathMatch:'full'
  },
  {
    path:'enseigant',
    component:EnseigantsComponent,
  },
{
  path:'cour',
  component:CoursComponent,
},
{
  path:'',
  redirectTo:'chat',
  pathMatch:'full',
},

{
  path:'chatbot',
  component:ChatbotComponent,
},
{
  path:'quiz',
  component:QuizComponent,
},
{
  path:'question',
  component:QuestionComponent,
},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
