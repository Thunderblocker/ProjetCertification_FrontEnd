import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import {Component, OnInit} from '@angular/core';
=======
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
>>>>>>> 870f68f8207917de9ffa9c42a7ebbee1376c3c53
import { FormsModule } from '@angular/forms';
import { MessagesService } from '../../service/messages.service';
import { Message } from '../../model/message.model';
import { ChannelsService } from '../../service/channels.service';
import { Channel } from '../../model/Channel';
<<<<<<< HEAD
import {ChannelsComponent} from "../channels/channels.component";
import {User} from "../../model/User";
import {UsersService} from "../../service/users.service";

=======
import { UsersService } from '../../service/users.service';
import { MessagesListComponent } from '../messages-list/messages-list.component';
import { catchError } from 'rxjs';
>>>>>>> 870f68f8207917de9ffa9c42a7ebbee1376c3c53

@Component({
  selector: 'app-messages',
  standalone: true,
<<<<<<< HEAD

    imports: [
        NgForOf,
        CommonModule,
        FormsModule,
        ChannelsComponent,
        MessagesListComponent],
=======
  imports: [CommonModule, FormsModule, MessagesComponent, MessagesListComponent],
>>>>>>> 870f68f8207917de9ffa9c42a7ebbee1376c3c53
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
<<<<<<< HEAD


export class MessagesComponent implements OnInit{
=======
export class MessagesComponent implements OnInit {
>>>>>>> 870f68f8207917de9ffa9c42a7ebbee1376c3c53

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
<<<<<<< HEAD
    idUtilisateur: 1,
    idCanal: 1,
    date: new Date(),
    canal: undefined,
    utilisateur: this.user,
=======
    utilisateur: { id:100, pseudo:'defaut', prenom:'defaut', nom:'defaut', image:''}, 
    canal: { id:1, nom:'general' },  
    date: new Date()
>>>>>>> 870f68f8207917de9ffa9c42a7ebbee1376c3c53
  };

  currentChannel: Channel = {id:1, nom:"test2"};

<<<<<<< HEAD


  constructor(public messagesService: MessagesService, public channelService: ChannelsService) {

  }

  ngOnInit(): void {
    //this.channelService.getCurrentChannel();
      this.currentChannel = this.channelService.getCurrentChannel();
=======
  constructor(public messagesService: MessagesService, public channelService: ChannelsService, public userService: UsersService, private cdRef : ChangeDetectorRef) {
      this.channelService.loadChannelsList();
  }

  ngOnInit(): void {
    this.channelService.loadChannelsList();
    this.channelService.getChannel(1).subscribe((data: Channel) => {
      this.currentChannel = data;
    });
>>>>>>> 870f68f8207917de9ffa9c42a7ebbee1376c3c53
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
