import { Component } from '@angular/core';
import { Question, QuizService } from '../service/quiz.service';
import { CommonModule } from '@angular/common'; 
import { QuestionComponent } from '../question/question.component';



@Component({
  selector: 'app-quiz',
  standalone: true,
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
  imports: [CommonModule, QuestionComponent], 
})
export class QuizComponent {
onAnswerSelected($event: string) {
throw new Error('Method not implemented.');
}
  currentQuestion: Question | any = null;
  selectedAnswer: string | null = null;
  quizCompleted = false;
  questions: any;

  constructor(public quizService: QuizService) {
    this.loadCurrentQuestion();
  }

  loadCurrentQuestion() {
    this.currentQuestion = this.quizService.getCurrentQuestion();
  }

  selectAnswer(option: string) {
    this.selectedAnswer = option;
  }

  submitAnswer() {
    if (!this.selectedAnswer || !this.currentQuestion) return;

    this.quizService.submitAnswer(this.selectedAnswer);
    this.selectedAnswer = null;

    this.quizCompleted = this.quizService.isQuizCompleted();
    this.loadCurrentQuestion();
  }

  restartQuiz() {
    this.quizService.restart();
    this.quizCompleted = false;
    this.loadCurrentQuestion();
  }

  get currentQuestionIndex() {
    return this.quizService.getCurrentQuestionIndex();
  }

  get totalQuestions() {
    return this.quizService.getTotalQuestions();
  }

  get score() {
    return this.quizService.getScore();
  }
  

}
