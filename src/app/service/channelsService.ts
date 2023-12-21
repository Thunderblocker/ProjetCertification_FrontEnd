import { Injectable } from "@angular/core";
import { Channel } from "../model/Channel";
import { ApiChannel } from "./api.channel";
import { FetcherService } from "./fetcher.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChannelsService {

  channelList: Channel[] = [];
  currentChannel!: Channel;

  constructor(private apiChannel: ApiChannel, private fetcherService: FetcherService) {
    // Initialize the channel list
    this.loadChannelsList();

    // Set currentChannel to the first channel
    this.loadFirstChannel();

    console.log("Log from ChannelsService constructor");
  }

  loadChannelsList() {
    this.fetcherService.getAll<Channel>("channels").subscribe((data: Channel[]) => {
      //console.log(get)
      console.log("data : ",data);
      this.channelList = data;
      console.log("channellist : ", this.channelList);
    });
  }

  loadFirstChannel() {
    this.fetcherService.getById<Channel>("channels",1).subscribe((data: Channel) => {
      console.log("data : ",data);
      this.currentChannel = data;
      console.log("Log from ChannelsService loadFirstChannel :", this.currentChannel);
    });
  }

  // EDIT CHANNEL
  editChannel(channel: Channel) {
    return this.fetcherService.put<Channel>("channels", channel);
  }

  // DELETE CHANNEL
  deleteChannel(id: number) {
    return this.fetcherService.delete<Channel>("channels", id);
  }

  // POST CHANNEL
  addNewChannel(channel: Channel) {
    return this.fetcherService.post<Channel>("channels", channel);
  }

  // Get current channel
  getCurrentChannel(): Channel {
    return this.currentChannel;
  }

  getChannel(id: number): Observable<Channel>{
    return this.fetcherService.getById<Channel>("channels", id);
  }
}
