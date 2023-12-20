import {Injectable} from "@angular/core";
import {Channel} from "../model/Channel";
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









}
