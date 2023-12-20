import {Injectable} from "@angular/core";
import {Channel} from "../model/Channel";
import {ApiChannel} from "./api.channel";


@Injectable({
  providedIn: 'root'
})
export class ChannelsService {

  channelList!: Channel[];
  currentChannel!: Channel;

  constructor(private apiChannel: ApiChannel) {
    //Initialize the channel list
    this.loadChannelsList();

    //Set currentChannel to the first channel
    this.loadFirstChannel();

  }

  loadChannelsList() {
    this.apiChannel.getAllChannels().subscribe((data:Channel[]) => {
      this.channelList = data;
    });
    
  }
  loadFirstChannel() {
    if (this.channelList && this.channelList.length > 0) {
      this.currentChannel = this.channelList[0];
    } else {
      // Use a default channel or handle the case where the list is empty
      this.apiChannel.getChannelById(1).subscribe((data: Channel) => {
        this.currentChannel = data;
      });
    }
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

  // Get current channel
  getCurrentChannel(): Channel {
    return this.currentChannel;
  }



}
