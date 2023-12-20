import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {ChannelsService} from "../../services/channelsService";
import {Channel} from "../../models/Channel";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-channels',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './channels.component.html',
  styleUrl: './channels.component.scss'
})
export class ChannelsComponent {

  listeChannels!:Channel[];
  idChannelActive = 0;
  displayStyleEdit = "none";
  displayStyledelete = "none";
  displayStyleAdd = "none";

  //recuperer la valeur input modifier le canal
  inputChannel:Channel={
    id: this.idChannelActive,
    nom:"",
  }
  //Recuperer la valeur input ajouter un canal
  inputAddChannel:Channel={
    id:0,
    nom:"",
  }



  constructor( public channels:ChannelsService) {
    this.listeChannels= this.channels.channelList;
  }

  //Add class active element
  selectedItem = 0;
  setActiveClass(id:number){
    this.selectedItem = id;
    this.idChannelActive = id;
  }


  // ***********  EDIT CHANNEL **************************//
  editChannel() {
    this.displayStyleEdit = "block";
  }
  closeEdit() {
    this.displayStyleEdit = "none";

  }
  editChannelSubmit(){
    let id =  this.idChannelActive;
    //initialiser id de channel selectionner
    this.inputChannel={
      id: this.idChannelActive,
      nom:this.inputChannel.nom,
    }
    if(id ===0) {
      alert(' le canal general ne peut pas etre modifier')  //TODO CUSTOM
    }else{
      this.channels.editChannel(this.inputChannel);
      this.closeEdit();
      // appel la fonction refresh                       //TODO
    }
  }


  // ***********  DELETE CHANNEL **************************//
  deleteChannel(){
    this.displayStyledelete = "block";
  }
  closeDelete() {
    this.displayStyledelete = "none";
  }
  deleteChannelSubmit(){
    let id = this.idChannelActive;
    if(id ===0) {
      alert(' le canal general ne peut pas etre supprimer ') //TODO CUSTOM
    }else{
      this.channels.deleteChannel(id);
      this.closeDelete();
      // appel la fonction refresh                       //TODO
    }
  }

    // ***********  ADD NEW  CHANNEL **************************//

  addChannel(){
    this.displayStyleAdd = "block";
  }
  closeAdd(){
    this.displayStyleAdd = "none";
  }
  addChannelSubmit(){
    this.inputAddChannel={
      id:0,
      nom:this.inputAddChannel.nom,
    }
    this.channels.addNewChannel(this.inputAddChannel);
     this.closeAdd();
      // appel la fonction refresh                       //TODO

  }



}
