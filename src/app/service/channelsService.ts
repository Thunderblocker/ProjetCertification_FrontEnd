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
    this.apiChannel.getAllChannels().subscribe((data:Channel[]) => {
      this.channelList = data;
    });

    //Set currentChannel to the first channel
    this.apiChannel.getChannelById(1).subscribe((data:Channel) => {
      this.currentChannel = data;
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

  // Get current channel
  getCurrentChannel(): Channel {
    return this.currentChannel;
  }



}
