import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessagesService } from '../../service/messages.service';
import { Message } from '../../model/message.model';
import { MessagesListComponent } from '../messages-list/messages-list.component';
import { ChannelsService } from '../../service/channelsService';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [CommonModule, FormsModule, MessagesListComponent],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.scss'
})
export class MessagesComponent implements OnInit{

  newMessage: Message = {
    id: 0,
    contenu: '',
    idUtilisateur: 1, 
    idCanal: 1, 
    date: new Date()
  };

  

  constructor(public messagesService: MessagesService, public channelService: ChannelsService) {
    
  }
  
  ngOnInit(): void {
    this.channelService.getCurrentChannel();
  }

  //ajouter un nouveau message
  addMessageSubmit() {
    if (this.newMessage.contenu.trim() !== '') {
      this.messagesService.addNewMessage(this.newMessage).subscribe(() => {
        // Réinitialisez le message après l'envoi
        this.newMessage.contenu = '';
        // Rechargez la liste des messages
        this.messagesService.loadMessagesList();
      });
    }
  }
}
