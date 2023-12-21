import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessagesService } from '../../service/messages.service';
import { Message } from '../../model/message.model';
import { ChannelsService } from '../../service/channels.service';
import { Channel } from '../../model/Channel';
import { UsersService } from '../../service/users.service';
import { MessagesListComponent } from '../messages-list/messages-list.component';

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
    utilisateur: { id:100, pseudo:'defaut', prenom:'defaut', nom:'defaut', image:''}, 
    canal: { id:1, nom:'general' },  
    date: new Date()
  };

  currentChannel: Channel = {id:1, nom:"test2"};

  constructor(public messagesService: MessagesService, public channelService: ChannelsService, public userService: UsersService, private cdRef : ChangeDetectorRef) {
      this.channelService.loadChannelsList();
  }

  ngOnInit(): void {
    this.channelService.loadChannelsList();
    this.channelService.getChannel(1).subscribe((data: Channel) => {
      this.currentChannel = data;
    });
  }

  // Ajouter un nouveau message
  addMessageSubmit() {
    if (this.newMessage.contenu.trim() !== '') {
      this.newMessage.canal.id = this.channelService.getCurrentChannel()?.id??1; 
      
      this.newMessage.utilisateur.id = this.userService.getCurrentUserId()??1; 
      
      this.messagesService.addNewMessage(this.newMessage).subscribe(() => {
        this.newMessage.contenu = '';
        this.messagesService.loadMessagesList();
      });
    }
  }
}
