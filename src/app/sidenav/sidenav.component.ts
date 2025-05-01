import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  standalone: false,
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {

  navItems = [
    { path: '/home', icon: 'edit', label: 'Home' },
    { path: '/cour', icon: 'edit', label: 'Cours' },
    { path: '/student', icon: 'edit', label: 'Student' },
    { path: '/chatbot', icon: 'edit', label: 'Chatbot' },
    { path: '/enseigant', icon: 'edit', label: 'Enseigants' },
    { path: '/quiz', icon: 'edit', label: 'Quiz' }
  ];

imagePath: string = 'assets/images/user.png';

}
