import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-user-login',
  standalone: false,
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent implements OnInit
{
  message: string = '';
  isLoading: boolean = false;
  signupUsers:any[] = [];
  signupObj:  any = {
    userName:'',
    password:'',
    
  };
  loginObj: any= {
    userName:'mohamed',
    password:'mohamed'
  };
 


  
constructor(private router :Router ,private authService: AuthService){}
ngOnInit(): void {
  const localData = localStorage.getItem('signUpUsers');
  if((localData != null )){
    this.signupUsers = JSON.parse(localData);
    }
  
}
onSignup(){
  this.signupUsers.push(this.signupObj);
  localStorage.setItem('signUpUsers',JSON.stringify(this.signupUsers));
 this.signupObj = {
    userName:'',
    email: '',
    password:''
  };

};
resetPassword() {
  this.isLoading = true;
 // this.authService.requestPasswordReset(this.email).subscribe({
   // next: () => {
     // this.message = 'Un email de réinitialisation a été envoyé.';
      //this.isLoading = false;
    //},
    //error: (err: { error: { message: string; }; }) => {
     // this.message = 'Erreur: ' + err.error.message;
      //this.isLoading = false;
   // }
  //});
}
  email(email: string) {
    throw new Error('Method not implemented.');
  }
onLogin(){
  // const isUserExist = this.signupUsers.find(m => m.userName == this.loginObj.userName && m.password == this.loginObj.password);
  // if(isUserExist != undefined){
  //   this.router.navigate(['/students']);
  //   alert('User Login successfully');
  // }else {
  //   alert('Worning credentials');
  // }
  //this.router.navigate(['/student']);
  //this.router.navigate(['/cour']);
  //this.router.navigate(['/chatbot']);
  //this.router.navigate(['/quiz'])

}


}
