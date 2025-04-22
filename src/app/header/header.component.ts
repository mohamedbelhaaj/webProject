import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() toggleSidebarForMe: EventEmitter<any> =new EventEmitter();

  ngOnInit(): void {}
  toggleSidebar(){
    this.toggleSidebarForMe.emit();
    
  }

}
