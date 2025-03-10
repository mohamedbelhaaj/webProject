import { Component } from '@angular/core';
import { ChatbotService } from '../../service/chatbot.service';

@Component({
  selector: 'app-chatbot',
  standalone: false,
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.css'
})
export class ChatbotComponent {
  messages: { text: string, sender: 'user' | 'bot' }[] = [];
  userMessage: string = '';

  constructor(private chatbotService: ChatbotService) {}

  sendMessage() {
    if (!this.userMessage.trim()) return;

    // Ajouter le message de l'utilisateur
    this.messages.push({ text: this.userMessage, sender: 'user' });

    // Envoyer le message au service et récupérer la réponse
    this.chatbotService.getBotResponse(this.userMessage).subscribe(response => {
     //// const botReply = response.choices ? response.choices[0].message.content : response;
     // this.messages.push({ text: botReply, sender: 'bot' });
    });

    this.userMessage = '';
  }
}