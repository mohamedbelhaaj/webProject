import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit{
  title = 'project';
  sideBarOpen= true;
  
  ngOnInit(): void {}
  

  
    sideBarToggler(){
      this.sideBarOpen=!this.sideBarOpen;
    
  }
}

