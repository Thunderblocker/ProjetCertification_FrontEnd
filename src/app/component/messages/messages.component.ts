import {NgForOf} from "@angular/common";
import { CommonModule } from '@angular/common';
import {Component, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessagesService } from '../../service/messages.service';
import { Message } from '../../model/message.model';
import { MessagesListComponent } from '../messages-list/messages-list.component';
import { ChannelsService } from '../../service/channelsService';
import { Channel } from '../../model/Channel';
import {ChannelsComponent} from "../channels/channels.component";
import {User} from "../../model/User";
import {UsersService} from "../../service/users.service";


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
  styleUrl: './messages.component.scss'
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
    idUtilisateur: 1,
    idCanal: 1,
    date: new Date(),
    canal: undefined,
    utilisateur: this.user,
  };

  currentChannel!: Channel;



  constructor(public messagesService: MessagesService, public channelService: ChannelsService) {

  }

  ngOnInit(): void {
    //this.channelService.getCurrentChannel();
      this.currentChannel = this.channelService.getCurrentChannel();
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
