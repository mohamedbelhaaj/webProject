import { Injectable } from '@angular/core';

export interface Question {
  question: string;
  options: string[];
  answer: string;
}

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private questions: Question[] = [
    {
      question: 'Quel est le langage utilisé par Angular ?',
      options: ['Java', 'TypeScript', 'Python', 'PHP'],
      answer: 'TypeScript'
    },
    {
      question: 'Quel décorateur est utilisé pour créer un composant ?',
      options: ['@NgModule', '@Component', '@Injectable', '@Directive'],
      answer: '@Component'
    },
    {
      question: 'Quel fichier contient les routes dans une app Angular ?',
      options: ['app.module.ts', 'main.ts', 'app-routing.module.ts', 'index.html'],
      answer: 'app-routing.module.ts'
    }
  ];

  private currentQuestionIndex = 0;
  private score = 0;

  getCurrentQuestion(): Question | null {
    return this.questions[this.currentQuestionIndex] || null;
  }

  getTotalQuestions(): number {
    return this.questions.length;
  }

  getCurrentQuestionIndex(): number {
    return this.currentQuestionIndex;
  }

  getScore(): number {
    return this.score;
  }

  submitAnswer(answer: string): boolean {
    const current = this.questions[this.currentQuestionIndex];
    const isCorrect = answer === current.answer;
    if (isCorrect) this.score++;
    this.currentQuestionIndex++;
    return isCorrect;
  }

  isQuizCompleted(): boolean {
    return this.currentQuestionIndex >= this.questions.length;
  }

  restart(): void {
    this.currentQuestionIndex = 0;
    this.score = 0;
  }
}
