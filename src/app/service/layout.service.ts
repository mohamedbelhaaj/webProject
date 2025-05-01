import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  private sidebarState = new BehaviorSubject<boolean>(true);
  sidebarState$: Observable<boolean> = this.sidebarState.asObservable();

  // État du mode sombre
  private darkMode = new BehaviorSubject<boolean>(false);
  darkMode$: Observable<boolean> = this.darkMode.asObservable();

  // Titre de la page
  private pageTitle = new BehaviorSubject<string>('Dashboard');
  pageTitle$: Observable<string> = this.pageTitle.asObservable();

  /**
   * Basculer l'état de la sidebar
   */
  toggleSidebar(): void {
    this.sidebarState.next(!this.sidebarState.value);
  }

  /**
   * Définir l'état de la sidebar
   */
  setSidebarState(state: boolean): void {
    this.sidebarState.next(state);
  }

  /**
   * Basculer le mode sombre
   */
  toggleDarkMode(): void {
    const newState = !this.darkMode.value;
    this.darkMode.next(newState);
    this.applyDarkModeStyles(newState);
  }

  /**
   * Définir le titre de la page
   */
  setPageTitle(title: string): void {
    this.pageTitle.next(title);
  }

  /**
   * Appliquer les styles du mode sombre
   */
  private applyDarkModeStyles(isDark: boolean): void {
    if (isDark) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }
}