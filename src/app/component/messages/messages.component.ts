import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessagesService } from '../../service/messages.service';
import { Message } from '../../model/message.model';
import { ChannelsService } from '../../service/channelsService';
import { Channel } from '../../model/Channel';
import { UsersService } from '../../service/users.service';
import { MessagesListComponent } from '../messages-list/messages-list.component';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [CommonModule, FormsModule, MessagesComponent, MessagesListComponent],
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  newMessage: Message = {
    id: 0,
    contenu: '',
    idUtilisateur: 1, 
    idCanal: 1, 
    date: new Date()
  };

  currentChannel!: Channel;

  constructor(public messagesService: MessagesService, public channelService: ChannelsService, public userService: UsersService, private cdRef : ChangeDetectorRef) {
      this.channelService.loadChannelsList();
  }

  ngOnInit(): void {
    this.channelService.loadChannelsList();
    this.channelService.loadFirstChannel();
    this.currentChannel = this.channelService.getCurrentChannel();
  }

  // Ajouter un nouveau message
  addMessageSubmit() {
    if (this.newMessage.contenu.trim() !== '') {
      this.newMessage.idCanal = this.channelService.getCurrentChannel()?.id??1; 
      
      this.newMessage.idUtilisateur = this.userService.getCurrentUserId()??1; 
      
      this.messagesService.addNewMessage(this.newMessage).subscribe(() => {
        this.newMessage.contenu = '';
        this.messagesService.loadMessagesList();
      });
    }
  }
}
