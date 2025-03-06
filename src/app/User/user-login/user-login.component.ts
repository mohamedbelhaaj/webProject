import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  standalone: false,
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent implements OnInit
{
  signupUsers:any[] = [];
  signupObj:  any = {
    userName:'',
    email:'',
    password:''
  };
  loginObj: any= {
    userName:'mohamed',
    password:'mohamed'
  };
constructor(private router :Router){}
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
    email:'',
    password:''
  };

}
onLogin(){
  // const isUserExist = this.signupUsers.find(m => m.userName == this.loginObj.userName && m.password == this.loginObj.password);
  // if(isUserExist != undefined){
  //   this.router.navigate(['/students']);
  //   alert('User Login successfully');
  // }else {
  //   alert('Worning credentials');
  // }
  this.router.navigate(['/student']);
  this.router.navigate(['/cour']);

}


}
