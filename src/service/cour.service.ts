import { Injectable } from '@angular/core';
interface Cours {
  id: number;
  nom: string;
  classe: string;
  pdf?: File | null;
}

@Injectable({
  providedIn: 'root'
})
export class CourService {
  private coursList: Cours[] = [];
  private nextId = 1;

  getCoursList(): Cours[] {
    return this.coursList;
  }

  ajouterCours(nom: string, classe: string, pdf?: File | null): void {
    if (nom.trim() && classe.trim()) {
      const nouveauCours: Cours = {
        id: this.nextId++,
        nom,
        classe,
        pdf
      };
      this.coursList.push(nouveauCours);
    }
  }

  supprimerCours(id: number): void {
    this.coursList = this.coursList.filter(cours => cours.id !== id);
  }


  constructor() { }
}
