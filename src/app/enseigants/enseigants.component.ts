import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { enseigantService } from '../service/enseigant.service';
import { BooleanInput } from '@angular/cdk/coercion';
interface enseigants {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: string;
  previewUrl: string ; // ou null ou undefined selon l'usage
 image : File;

}

@Component({
  selector: 'app-enseigants',
  standalone: false,
  templateUrl: './enseigants.component.html',
  styleUrl: './enseigants.component.css'
})
export class EnseigantsComponent implements OnInit {
mati: any;
sideBarToggler() {
throw new Error('Method not implemented.');
}
sideBarOpen: BooleanInput;
deleteEnseigants(arg0: any) {
throw new Error('Method not implemented.');
}
  editingenseigantId: undefined;
  enseigantForm: any;
enseigants: any;
oneFileChange($event: Event){

}
enseigantsForm! :FormGroup;
enseigant : enseigants[] = [];
successMessage: string = '';
  errorMessage: string = '';
  isEditMode: boolean = false;
  editingEnseigantId?: number;
previewUrl: any;

  constructor(private fb: FormBuilder, private enseigantService: enseigantService) {}

  ngOnInit() {
    this.initForm();
    this.loadenseigants();
  }

  initForm() {
    this.enseigantsForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      dateOfBirth: ['', Validators.required],
      course: ['', Validators.required],

    });
  }

  loadEnseigants() {
    this.enseigantService.getEnseigant().subscribe({
      next: (data: enseigants[]) => {
        this.enseigant = data;
      },
      error: (err: any) => {
        console.error('Erreur lors du chargement des enseigants:', err);
        this.errorMessage = "Impossible de charger la liste des enseigants.";
      }
    });
  }

  isFieldInvalid(field: string): boolean {
    const control = this.enseigantsForm?.get(field);
    return !!(control && control.invalid && control.touched);
  }

  onSubmit() {
    if (this.enseigantsForm.invalid) return;

    if (this.isEditMode && this.editingenseigantId !== undefined) {
      // Mode édition
      this.enseigantService.updateEnseigant(this.editingenseigantId, this.enseigantsForm.value).subscribe({
        next: () => {
          this.successMessage = 'Étudiant mis à jour avec succès !';
          this.errorMessage = '';
          this.resetForm();
          this.loadenseigants();
        },
        error: (err: any) => {
          console.error('Erreur API :', err);
          this.errorMessage = "Erreur lors de la mise à jour de l'étudiant.";
          this.successMessage = '';
        }
      });
    } else {
      // Mode ajout
      this.enseigantService.addEnseigant(this.enseigantsForm.value).subscribe({
        next: () => {
          this.successMessage = 'Étudiant ajouté avec succès !';
          this.errorMessage = '';
          this.resetForm();
          this.loadEnseigants();
        },
        error: (err: any) => {
          console.error('Erreur API :', err);
          this.errorMessage = "Erreur lors de l'ajout de l'étudiant.";
          this.successMessage = '';
        }
      });
    }
  }

  editEnseigant(enseigant: enseigants) {
    this.isEditMode = true;
    this.editingEnseigantId = enseigant.id;
    this.enseigantsForm.patchValue(enseigant);
  }

  //deleteEnseigants(id: number) {
   // if (confirm("Voulez-vous vraiment supprimer cet étudiant ?")) {
     // this.enseigantService.deleteEnseigant(id).subscribe({
       // next: () => {
         // this.successMessage = 'Étudiant supprimé avec succès !';
          //this.errorMessage = '';
          //this.loadenseigants();
        //},
        //error: (err: any) => {
          //console.error('Erreur API :', err);
          //this.errorMessage = "Erreur lors de la suppression de l'étudiant.";
          //this.successMessage = '';
        //}
      //});
    //}
 // }
  loadenseigants() {
    throw new Error('Method not implemented.');
  }

  resetForm() {
    this.enseigantsForm.reset();
    this.isEditMode = false;
    this.editingEnseigantId = undefined;
  }

}




