import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {ChannelsService} from "../../service/channels.service";
import {Channel} from "../../model/Channel";
import {FormsModule} from "@angular/forms";
import {AlertComponent} from "./alertError/alert.component";

import {Message} from "../../model/message.model";
import {UsersService} from "../../service/users.service";
import {MessagesComponent} from "../messages/messages.component";
import {MessagesService} from "../../service/messages.service";



@Component({
  selector: 'app-channels',
  standalone: true,
  imports: [CommonModule, FormsModule, AlertComponent,MessagesComponent],
  templateUrl: './channels.component.html',
  styleUrl: './channels.component.scss'
})

export class ChannelsComponent  implements OnInit {
  displayStyleEdit = "none";
  displayStyledelete = "none";
  displayStyleAdd = "none";
  displayStyleAlertError = "none";
  inputAddChannel : string = ""

  constructor(public channels: ChannelsService, public messageList: MessagesService, public users: UsersService) {
  console.log(this.channels.channelList)
  }

  ngOnInit(): void {
  }



  //Add class active element
  selectedItem = 0;

  setActiveClass(canal: Channel) {
    this.channels.currentChannel = canal;
    this.messageList.messagesFiltree()


    // this.selectedItem = id;
    // this.idChannelActive = id;
    // this.refrechData();
    // //filter channel par user
    // this.filterParChannelUser()
    // this.channels.loadChannelsList();

    // if(this.listeChannels.length !=0){
    //   this.listeChannels.forEach((element) => console.log("canal = "+element));
    // }
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
      // appel la fonction refresh                     //TODO
      // this.refrechPage();

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
      // appel la fonction refresh                       //TODO
      // this.refrechPage();
    }
  }

  //  ADD NEW  CHANNEL  //

  addChannel() {
    this.displayStyleAdd = "block";
  }

  closeAdd() {
    this.displayStyleAdd = "none";
  }

  addChannelSubmit() {
   this.addChannel();
      let inputAddChannel : Channel = {
        id: 0,
        nom: this.inputAddChannel
      };
      console.log(inputAddChannel)
      this.channels.addNewChannel(inputAddChannel).subscribe((data)=> console.log(data))
      this.closeAdd();
    // appel la fonction refresh                       //TODO
    //this.refrechPage();

  }


  //******************  Afficher les details  channels / users ****************************//


  filterParChannelUser() {
    this.channels.loadChannelsList() //filterUsersChannel();

  }


  //******************  Afficher les details  channels / users ****************************//


}
