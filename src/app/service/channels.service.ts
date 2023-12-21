import { Injectable, OnInit } from "@angular/core";
import { Channel } from "../model/Channel";
import { FetcherService } from "./fetcher.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChannelsService implements OnInit {

  channelList: Channel[] = [];
  currentChannel!: Channel;

  constructor(private fetcherService: FetcherService) {
    if(this.currentChannel == undefined) {
      this.loadFirstChannel();
    }
  }
  
  ngOnInit(): void {
    this.loadChannelsList();
    this.loadFirstChannel();
  }

    /* 
      - SERVICE DATA  -------------------------------------------
      Following methods are used to load
      the channels list and the current channel
      from the server .
  */

  // GET CHANNELS LIST - ALL CHANNELS
  loadChannelsList() {
    this.fetcherService.getAll<Channel>("channels").subscribe((data: Channel[]) => {
      this.channelList = data;
    });
  }

  // LOAD FIRST CHANNEL BY ID -> channel 1 general
  loadFirstChannel() {
    this.fetcherService.getById<Channel>("channels",1).subscribe((data: Channel) => {
      this.currentChannel = data;
    });
  }
  
  // GET CURRENT CHANNEL
  getCurrentChannel(): Channel {
    if(this.currentChannel == undefined) {
      this.loadFirstChannel();
    }
    return this.currentChannel;
  }

  // GET CURRENT CHANNEL BY ID
  getChannel(id: number): Observable<Channel>{
    return this.fetcherService.getById<Channel>("channels", id);
  }

  //GET CHANNEL LIST - channelList
  getChannelList(): Channel[] {
    return this.channelList;
  }

  /* 
      - SERVICE CRUD  -------------------------------------------
  */

  //GET ALL CHANNELS
  getAllChannels(): Observable<Channel[]> {
    return this.fetcherService.getAll<Channel>("channels");
  }

  //GET CHANNEL BY ID
  getChannelById(id: number): Observable<Channel> {
    return this.fetcherService.getById<Channel>("channels", id);
  }

  // PUT - EDIT CHANNEL
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

}
