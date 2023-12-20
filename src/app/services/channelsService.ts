import {Injectable} from "@angular/core";
import {Channel} from "../models/Channel";
import {ApiChannel} from "./api.channel";


@Injectable({
  providedIn: 'root'
})
export class ChannelsService {

  channelList!: Channel[];

  constructor(private apiChannel: ApiChannel) {
    this.apiChannel.getAllChannels().subscribe((data:Channel[]) => {
      this.channelList = data;
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











}
