import { Component } from '@angular/core';
import {ChannelsComponent} from "../channels.component";
import {CommonModule} from "@angular/common";
import {Channel} from "../../../model/Channel";
import {ChannelsService} from "../../../service/channels.service";

@Component({
  selector: 'app-search-channel',
  standalone: true,
  imports: [ChannelsComponent,CommonModule],
  templateUrl: './search-channel.component.html',
  styleUrl: './search-channel.component.scss'
})
export class SearchChannelComponent {


  listeChannels: Channel[]=[];
  constructor(public channels: ChannelsService) {
   // this.listeChannels = this.channels.getChannelList();

  }


   filterRechercheCanal(text: string) {
    if (!text) {
      this.channels.channelList = this.listeChannels;
      return;
    }

     this.channels.channelList = this.listeChannels.filter(
      channel => channel?.nom.toLowerCase().includes(text.toLowerCase())
    );
   }


}
