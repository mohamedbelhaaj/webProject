import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Question } from '../service/quiz.service';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
  @Input() question!: Question;
  @Input() selectedAnswer: string | null = null;
  @Output() answerSelected = new EventEmitter<string>();

  selectOption(option: string) {
    this.answerSelected.emit(option);
  }
}
