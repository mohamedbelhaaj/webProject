import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {

  constructor() {}

  // Simuler une réponse du chatbot (remplace cette logique par un appel API)
  getBotResponse(userMessage: string): Observable<string> {
    const botReplies = [
      "Bonjour ! Comment puis-je vous aider ? 😊",
      "Je suis un chatbot, posez-moi une question ! 🤖",
      "Pouvez-vous reformuler votre question ?",
      "D'accord ! Je prends note de votre message."
    ];
    
    const randomReply = botReplies[Math.floor(Math.random() * botReplies.length)];
    
    // Retourne un message avec un délai simulé
    return of(randomReply).pipe(delay(1000));
  }
}
