import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {ChannelsService} from "../../service/channels.service";
import {Channel} from "../../model/Channel";
import {FormsModule} from "@angular/forms";
import {AlertComponent} from "./alertError/alert.component";

import {Message} from "../../model/message.model";
import {UsersService} from "../../service/users.service";
import {MessagesComponent} from "../messages/messages.component";
import {MessagesService} from "../../service/messages.service";

import {SearchChannelComponent} from "./search-channel/search-channel.component";



@Component({
  selector: 'app-channels',
  standalone: true,
  imports: [CommonModule, FormsModule, AlertComponent, MessagesComponent, SearchChannelComponent],
  templateUrl: './channels.component.html',
  styleUrl: './channels.component.scss'
})


export class ChannelsComponent implements OnInit {


  listeChannels!: Channel[];
  listeMessages!: Message[];
  idChannelActive = 0;


  displayStyleEdit = "none";
  displayStyledelete = "none";
  displayStyleAdd = "none";
  displayStyleAlertError = "none";

  //recuperer la valeur input modifier le canal
  inputChannel: Channel = {
    id: this.idChannelActive,
    nom: "",
  }
  //Recuperer la valeur input ajouter un canal
  inputAddChannel: Channel = {
    id: 0,
    nom: "",
  }


  constructor(public channels: ChannelsService, public messageList: MessagesService, public users: UsersService,) {
    this.listeChannels = this.channels.channelList;
    this.listeMessages = this.messageList.getAllMessages();

  }

  ngOnInit(): void {
  }


  refrechPage() {
    window.location.reload();
  }


  //Add class active element
  selectedItem = 0;


  setActiveClass(id: number) {
    this.selectedItem = id;
    this.idChannelActive = id;
    //filter channel par user
    this.filterParChannelUser();

    //Refresh data
    this.channels.loadChannelsList();


  }

  //    EDIT CHANNEL  //
  editChannel() {
    this.displayStyleEdit = "block";
  }

  closeEdit() {
    this.displayStyleEdit = "none";
  }

  editChannelSubmit() {
    let id = this.channels.currentChannel.id
    //initialiser id de channel selectionner
    let inputChannel : Channel = {
      id: this.channels.currentChannel.id,
      nom: this.inputAddChannel
    }
    if (id === 0) {
      this.closeEdit();
      this.displayStyleAlertError = "block";
    } else {
      this.channels.editChannel(inputChannel).subscribe()
      this.closeEdit();
      // appel la fonction refresh
      this.refrechPage();
      this.channels.loadChannelsList();

    }
  }

  //    DELETE CHANNEL //
  deleteChannel() {
    this.displayStyledelete = "block";
  }

  closeDelete() {
    this.displayStyledelete = "none";
  }

  deleteChannelSubmit() {
    let id = this.channels.currentChannel.id
    if (id === 0) {
      this.closeDelete();
      this.displayStyleAlertError = "block";
    } else {
      this.channels.deleteChannel(id).subscribe()
      this.closeDelete();
      // appel la fonction refresh
      this.refrechPage();
      this.channels.loadChannelsList();
    }
  }

  //  ADD NEW  CHANNEL  //
  addChannel() {
    console.log("*** addChannel ***");
    this.displayStyleAdd = "block";
  }
  closeAdd() {
    this.displayStyleAdd = "none";
  }

  addChannelSubmit() {

    // if (this.inputAddChannel.nom.trim() !== '') {
    //   this.inputAddChannel = {
    //     id: 0,
    //     nom: this.inputAddChannel.nom,
    //   };
    //   this.channels.addNewChannel(this.inputAddChannel);
    //   this.closeAdd();
    // }


    this.channels.addNewChannel(this.inputAddChannel);
    this.closeAdd();
    // appel la fonction refresh
    this.refrechPage();
    this.channels.loadChannelsList();
  }


  filterParChannelUser() {
    this.channels.loadChannelsList(); //filterUsersChannel();
  }


}
