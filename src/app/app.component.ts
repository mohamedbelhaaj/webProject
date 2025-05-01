import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  title = 'project';
  
  }
  
  


