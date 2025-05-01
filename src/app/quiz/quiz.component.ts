import { Component, OnInit } from '@angular/core';

interface Question {
  text: string;
  options: Option[];
  correctAnswer: number;
}

interface Option {
  id: number;
  text: string;
}

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  currentQuestionIndex: number = 0;
  selectedOption: number | null = null;
  score: number = 0;
  quizCompleted: boolean = false;
  progressWidth: string = '0%';

  questions: Question[] = [
    {
      text: 'Quelle balise HTML est utilisée pour créer un lien hypertexte ?',
      options: [
        { id: 1, text: '<button>php</button>' },
        { id: 2, text: '<link>' },
        { id: 3, text: '<href>' },
        { id: 4, text: '<url>' }
      ],
      correctAnswer: 1
    },
    {
      text: 'Quelle propriété CSS permet de changer la couleur du texte ?',
      options: [
        { id: 1, text: 'text-color' },
        { id: 2, text: 'font-color' },
        { id: 3, text: 'color' },
        { id: 4, text: 'text-style' }
      ],
      correctAnswer: 3
    },
    {
      text: 'Quelle méthode Angular est appelée lors de l\'initialisation du composant ?',
      options: [
        { id: 1, text: 'ngOnInit()' },
        { id: 2, text: 'ngOnStart()' },
        { id: 3, text: 'ngOnLoad()' },
        { id: 4, text: 'ngOnCreate()' }
      ],
      correctAnswer: 1
    }
  ];

  ngOnInit(): void {
    this.updateProgress();
  }

  get currentQuestion(): Question {
    return this.questions[this.currentQuestionIndex];
  }

  selectOption(optionId: number): void {
    this.selectedOption = optionId;
  }

  isOptionSelected(optionId: number): boolean {
    return this.selectedOption === optionId;
  }

  isCorrectAnswer(optionId: number): boolean {
    return this.currentQuestion.correctAnswer === optionId;
  }

  nextQuestion(): void {
    if (this.selectedOption !== null) {
      // Vérifier la réponse
      if (this.selectedOption === this.currentQuestion.correctAnswer) {
        this.score++;
      }

      // Passer à la question suivante
      if (this.currentQuestionIndex < this.questions.length - 1) {
        this.currentQuestionIndex++;
        this.selectedOption = null;
        this.updateProgress();
      } else {
        this.quizCompleted = true;
        this.progressWidth = '100%';
      }
    }
  }

  prevQuestion(): void {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
      this.selectedOption = null;
      this.updateProgress();
    }
  }

  updateProgress(): void {
    const progress = ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
    this.progressWidth = `${progress}%`;
  }

  restartQuiz(): void {
    this.currentQuestionIndex = 0;
    this.selectedOption = null;
    this.score = 0;
    this.quizCompleted = false;
    this.updateProgress();
  }

  get questionCounter(): string {
    return `Question ${this.currentQuestionIndex + 1} sur ${this.questions.length}`;
  }
}