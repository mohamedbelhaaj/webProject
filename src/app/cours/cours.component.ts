import { Component } from '@angular/core';
interface Cours {
  id: number;
  nom: string;
  classe: string;
  pdf?: File | null;

}

@Component({
  selector: 'app-cours',
  standalone: false,
  templateUrl: './cours.component.html',
  styleUrl: './cours.component.css'
})
export class CoursComponent {
onFileSelected($event: Event) {
throw new Error('Method not implemented.');
}

  coursList: Cours[] = [];
  newCours: Cours = { id: 0, nom: '', classe: '' };
  nextId = 1;
  ajouterCours() {
    if (this.newCours.nom.trim() && this.newCours.classe.trim()) {
      this.newCours.id = this.nextId++;
      this.coursList.push({ ...this.newCours });
      this.newCours = { id: 0, nom: '', classe: '' };
    }
  }

  supprimerCours(id: number) {
    this.coursList = this.coursList.filter(cours => cours.id !== id);
  }
  getPdfUrl(pdf: File | null): string {
    return pdf ? URL.createObjectURL(pdf) : '';
  }
  

}
