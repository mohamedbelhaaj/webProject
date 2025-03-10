import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './User/user-login/user-login.component';
import {  StudentComponent } from './student/student.component';
import { CoursComponent } from './cours/cours.component';
import { ChatbotComponent } from './chatbot/chatbot.component';

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
  {
    path:'',
    redirectTo:'student',
    pathMatch:'full'
  },
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
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
