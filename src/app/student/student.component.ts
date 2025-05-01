import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../service/student.service'

interface Student {
class: any;
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: string;
  course: string;
  previewUrl: string ; // ou null ou undefined selon l'usage
 image : File;

}

@Component({
  standalone:false,
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
onFileChange($event: Event) {
throw new Error('Method not implemented.');
}
  studentForm!: FormGroup;
  students: Student[] = [];
  successMessage: string = '';
  errorMessage: string = '';
  isEditMode: boolean = false;
  editingStudentId?: number;
previewUrl: any;

  constructor(private fb: FormBuilder, private studentService: StudentService) {}

  ngOnInit() {
    this.initForm();
    this.loadStudents();
  }

  initForm() {
    this.studentForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      dateOfBirth: ['', Validators.required],
      course: ['', Validators.required],

    });
  }

  loadStudents() {
    this.studentService.getStudents().subscribe({
      next: (data) => {
        this.students = data;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des étudiants:', err);
        this.errorMessage = "Impossible de charger la liste des étudiants.";
      }
    });
  }

  isFieldInvalid(field: string): boolean {
    const control = this.studentForm?.get(field);
    return !!(control && control.invalid && control.touched);
  }

  onSubmit() {
    if (this.studentForm.invalid) return;

    if (this.isEditMode && this.editingStudentId !== undefined) {
      // Mode édition
      this.studentService.updateStudent(this.editingStudentId, this.studentForm.value).subscribe({
        next: () => {
          this.successMessage = 'Étudiant mis à jour avec succès !';
          this.errorMessage = '';
          this.resetForm();
          this.loadStudents();
        },
        error: (err) => {
          console.error('Erreur API :', err);
          this.errorMessage = "Erreur lors de la mise à jour de l'étudiant.";
          this.successMessage = '';
        }
      });
    } else {
      // Mode ajout
      this.studentService.addStudent(this.studentForm.value).subscribe({
        next: () => {
          this.successMessage = 'Étudiant ajouté avec succès !';
          this.errorMessage = '';
          this.resetForm();
          this.loadStudents();
        },
        error: (err) => {
          console.error('Erreur API :', err);
          this.errorMessage = "Erreur lors de l'ajout de l'étudiant.";
          this.successMessage = '';
        }
      });
    }
  }

  editStudent(student: Student) {
    this.isEditMode = true;
    this.editingStudentId = student.id;
    this.studentForm.patchValue(student);
  }

  deleteStudent(id: number) {
    if (confirm("Voulez-vous vraiment supprimer cet étudiant ?")) {
      this.studentService.deleteStudent(id).subscribe({
        next: () => {
          this.successMessage = 'Étudiant supprimé avec succès !';
          this.errorMessage = '';
          this.loadStudents();
        },
        error: (err) => {
          console.error('Erreur API :', err);
          this.errorMessage = "Erreur lors de la suppression de l'étudiant.";
          this.successMessage = '';
        }
      });
    }
  }

  resetForm() {
    this.studentForm.reset();
    this.isEditMode = false;
    this.editingStudentId = undefined;
  }

}
