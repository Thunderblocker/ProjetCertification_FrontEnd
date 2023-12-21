import {CommonModule, NgForOf} from '@angular/common';

import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { MessagesService } from '../../service/messages.service';
import { Message } from '../../model/message.model';
import { ChannelsService } from '../../service/channels.service';
import { Channel } from '../../model/Channel';
import {ChannelsComponent} from "../channels/channels.component";
import {User} from "../../model/User";
import {UsersService} from "../../service/users.service";
import {MessagesListComponent} from "../messages-list/messages-list.component";


@Component({
  selector: 'app-messages',
  standalone: true,
    imports: [
        NgForOf,
        CommonModule,
        FormsModule,
        ChannelsComponent,
        MessagesListComponent],

  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})



export class MessagesComponent implements OnInit{

  //réinitialisation  de user pour creer un nouveau message
  private user: User ={
    id:0,
    pseudo: '',
    prenom:'',
    nom:'',
    image:''
  };

  newMessage: Message = {
    id: 0,
    contenu: '',
    utilisateur: { id:100, pseudo:'defaut', prenom:'defaut', nom:'defaut', image:''},
    canal: { id:1, nom:'general' },
    date: new Date()

  };

  currentChannel: Channel = {id:1, nom:"General"};




  // constructor(public messagesService: MessagesService, public channelService: ChannelsService) {
  //
  // }
  constructor(public messagesService: MessagesService, public channelService: ChannelsService, public userService: UsersService, private cdRef : ChangeDetectorRef) {
    this.channelService.loadChannelsList();
  }
  ngOnInit(): void {
    //this.channelService.getCurrentChannel();
      this.currentChannel = this.channelService.getCurrentChannel();
      this.messagesService.messagesFiltree()

  // ngOnInit(): void {
  //   this.channelService.loadChannelsList();
  //   this.channelService.getChannel(1).subscribe((data: Channel) => {
  //     this.currentChannel = data;
  //   });

  }

  // Ajouter un nouveau message
  addMessageSubmit() {
    if (this.newMessage.contenu.trim() !== '') {
     // this.newMessage.canal.id = this.channelService.getCurrentChannel()?.id??1;       // revoir ca

      this.newMessage.utilisateur.id = this.userService.getCurrentUserId()??1;
      this.newMessage.canal = this.channelService.currentChannel;
      this.messagesService.addNewMessage(this.newMessage).subscribe(() => {
        this.newMessage.contenu = '';
        this.messagesService.messagesFiltree()

      });
    }
  }
}
