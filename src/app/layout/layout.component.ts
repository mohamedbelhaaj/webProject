import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { LayoutService } from '../service/layout.service';

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
sideBarToggler() {
  
throw new Error('Method not implemented.');
}
sidebarVisible = true; 
  sidebarOpen = true;
  darkMode = false;
  pageTitle = '';
  private subscriptions = new Subscription();
  

  constructor(private layoutService: LayoutService) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.layoutService.sidebarState$.subscribe((state: boolean) => {
        this.sidebarOpen = state;
      })
    );

    this.subscriptions.add(
      this.layoutService.darkMode$.subscribe((mode: boolean) => {
        this.darkMode = mode;
      })
    );

    this.subscriptions.add(
      this.layoutService.pageTitle$.subscribe((title: string) => {
        this.pageTitle = title;
      })
    );
  }

  toggleSidebar(): void {
    this.layoutService.toggleSidebar();
  }

  toggleDarkMode(): void {
    this.layoutService.toggleDarkMode();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
