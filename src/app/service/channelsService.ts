import {Injectable} from "@angular/core";
import {Channel} from "../model/Channel";
import {ApiChannel} from "./api.channel";
import {User} from "../model/User";
import {UsersService} from "./users.service";
import {Message} from "../model/message.model";
import {MessagesService} from "./messages.service";
import {CloneChannel} from "../model/CloneChannel";



@Injectable({
  providedIn: 'root'
})
export class ChannelsService {

  channelsList!: Channel[];
  channelListClone!: CloneChannel[];
  clonedChannelList!:CloneChannel[]|any;
  currentChannel!: Channel;
  listeTousCanaux!: Channel[];

   listeMsgService!: Message[]|any;


  constructor(private  apiChannel: ApiChannel, private userslist:UsersService, private listeMessages:MessagesService) {
    this.listeMsgService = this.listeMessages.loadMessagesList()
    //Initialize the channel list
    this.loadChannelsList();

    //Set currentChannel to the first channel
    this.loadFirstChannel();

  }

  loadChannelsList() {
    this.apiChannel.getAllChannels().subscribe((data:Channel[]) => {
      this.channelsList = data;
        this.filterNewUsersChannel(data,this.listeMsgService);
    });

  }
  loadFirstChannel() {
    if (this.channelsList && this.channelsList.length > 0) {
      this.currentChannel = this.channelsList[0];
    } else {
      // Use a default channel or handle the case where the list is empty
      this.apiChannel.getChannelById(1).subscribe((data: Channel) => {
        this.currentChannel = data;
      });
    }
  }

  //GET ALL CHANNELS REFRESH
  getAllChannelsRefresh() {
    return this.apiChannel.getAllUpdateChannel().subscribe((data:Channel[]) => {
      //console.log(" service appel refresh "+ JSON.stringify(data))
      this.listeTousCanaux = data;
    });
  }



  //EDIT CHANNEL
  editChannel(channel: Channel) {
    return this.apiChannel.updateChannel(channel);
  }

  //DELETE CHANNEL
  deleteChannel(id:number){
    return this.apiChannel.deleteChannel(id);
  }
  //POST CHANNEL
  addNewChannel(channel:Channel){
    return this.apiChannel.postNewChannel(channel);
  }

  // GET CURRENT CHANNEL
  getCurrentChannel(): Channel {
    return this.currentChannel;
  }


  //FILTER USERS BY CHANNELS
   listeTousUsers: User[]= this.userslist.usersList;

   listeTousMsg: Message[]= this.listeMessages.messagesList;
   listefiltrerChannelsUser!:Message[];
    listeUtilisateur!:User[];
  filterUsersChannel(){
    this.listeMessages.messagesList.filter(msg => {
       this.listefiltrerChannelsUser = this.listeMessages.messagesList;
    });
  }

  filterNewUsersChannel(data:Channel[],msgData:Message[]){
   // this.listeTousMsg;


     this.clonedChannelList = { ... data };
     //console.log(" List99 ===  "+ JSON.stringify(data));
     // console.log(" channelList ===  "+ JSON.stringify(this.channelList));
    //console.log(" clonedChannelList ===  "+ JSON.stringify(clonedChannelList));

    for (var i in this.clonedChannelList) {
     Object.assign(this.clonedChannelList[i], {utilisateur: [] });
     //console.log(this.clonedChannelList[i]);
       console.log(" msg ------"+ JSON.stringify(msgData));
      for (var j in msgData) {
           console.log(" this.clonedChannelList[i].id ===  "+ JSON.stringify(this.clonedChannelList[i].id));
            console.log(" this.listeTousMsg[j].canal?.id ===  "+ JSON.stringify(msgData[j].canal?.id));
           if(this.clonedChannelList[i].id === msgData[j].canal?.id){
            // console.log(" this.clonedChannelList[i].id ===  "+ JSON.stringify(this.clonedChannelList[i].id));
            // console.log(" this.listeTousMsg[j].canal?.id ===  "+ JSON.stringify(this.listeTousMsg[j].canal?.id));
               this.clonedChannelList[i].utilisateur.push(msgData[j].utilisateur);

          }
      }

    }
    console.log(" clonedChannelList MAJ ===  "+ JSON.stringify(this.clonedChannelList));



    // for(var elt of data){
    //    //clonedChannelList[i].push([]);
    //     var a =Object.assign(elt, {approvers: [{id: '12'}] });
    //     //console.log(" a ===  "+ JSON.stringify(a));
    // }
    //console.log(" clonedChannelList ===  "+ JSON.stringify(clonedChannelList));


   // clonedChannelList.forEach((eltChannel) => {
   //
   //     Object.assign(eltChannel, []);
   //    // this.listeTousMsg.forEach((eltMsg) => {
   //     // if(eltChannel.id === eltMsg.canal?.id){
   //
   //        console.log(" ele channel ===  "+ JSON.stringify(eltChannel))
   //        //console.log(" ele msg  ===  "+ JSON.stringify(eltMsg))
   //         //Object.assign(eltChannel.utilisateur, eltMsg.utilisateur );
   //
   //     // }
   //
   //   // });
   //
   //  });





  }




}
