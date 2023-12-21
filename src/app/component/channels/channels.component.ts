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


  listeChannels!: Channel[];

  listeMessages!: Message[];

  @Input()
  listeTousCanaux!: Channel[];

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

  @Input() nomChannelActif!: string;


  constructor(public channels: ChannelsService, public messageList: MessagesService, public users: UsersService) {
    this.listeChannels = this.channels.channelList;
    this.listeMessages = this.messageList.getAllMessages();

  }

  ngOnInit(): void {
    this.listeTousCanaux = this.channels.channelList;

  }


  refrechPage() {
    //this.router.navigate(["/home"]);
    //this.router.navigateByUrl("/home");
    window.location.reload();
  }

  // Rafraîchir data
  refrechData() {
    // this.router.navigateByUrl('/home', { skipLocationChange: true }).then(() => {
    // this.router.navigate(['Your actualComponent']);
    // });
  }


  //Add class active element
  selectedItem = 0;

  setActiveClass(id: number) {
    this.selectedItem = id;
    this.idChannelActive = id;
    this.refrechData();
    //filter channel par user
    this.filterParChannelUser()
    this.channels.loadChannelsList();

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
    let id = this.idChannelActive;
    //initialiser id de channel selectionner
    this.inputChannel = {
      id: this.idChannelActive,
      nom: this.inputChannel.nom,
    }
    if (id === 0) {
      this.closeEdit();
      this.displayStyleAlertError = "block";
    } else {
      this.channels.editChannel(this.inputChannel);
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
    let id = this.idChannelActive;
    if (id === 0) {
      this.closeDelete();
      this.displayStyleAlertError = "block";
    } else {
      this.channels.deleteChannel(id);
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
    if (this.inputAddChannel.nom.trim() !== '') {
      this.inputAddChannel = {
        id: 0,
        nom: this.inputAddChannel.nom,
      };
      this.channels.addNewChannel(this.inputAddChannel);
      this.closeAdd();
    }
      this.channels.addNewChannel(this.inputAddChannel);
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
