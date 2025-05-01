import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './User/user-login/user-login.component';
import { StudentComponent } from './student/student.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { CoursComponent } from './cours/cours.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { QuestionComponent } from './question/question.component';
import { ResultatComponent } from './resultat/resultat.component';
import { QuizComponent } from './quiz/quiz.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { EnseigantsComponent } from './enseigants/enseigants.component';
import { MatDividerModule } from '@angular/material/divider';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    StudentComponent,
    CoursComponent,
    ChatbotComponent,
    ResultatComponent,
    HeaderComponent,
    SidenavComponent,
    EnseigantsComponent,
    LayoutComponent,
    HomeComponent,

    
  
     ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    QuestionComponent,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatDividerModule,
    QuizComponent,




    QuizComponent ,


    
  
    
    ReactiveFormsModule,
    FormsModule,

    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
