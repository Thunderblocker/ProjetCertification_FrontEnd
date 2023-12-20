import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {ChannelsService} from "../../service/channelsService";

@Component({
  selector: 'app-channels',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './channels.component.html',
  styleUrl: './channels.component.scss'
})
export class ChannelsComponent {

  constructor( public channels:ChannelsService) {}


  onClickDisplayCardEdit(id: number) {
    alert('click edit')
  }

  deleteclient(id: number) {
    alert('click delete')
  }
}
