import { Injectable } from "@angular/core";
import { Channel } from "../model/Channel";
import { ApiChannel } from "./api.channel";
import { FetcherService } from "./fetcher.service";

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
      this.channelList = data;
    });
  }

  loadFirstChannel() {
    this.fetcherService.getById<Channel>("channels",1).subscribe((data: Channel) => {
      this.currentChannel = data;
    });
    console.log("Log from ChannelsService loadFirstChannel :", this.currentChannel);
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
}
