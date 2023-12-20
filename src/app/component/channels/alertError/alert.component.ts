import {Component, Injectable} from '@angular/core';
import {ChannelsComponent} from "../channels.component";
import {CommonModule} from "@angular/common";




@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule,ChannelsComponent],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss'
})


export class AlertComponent {
  constructor(public channel:ChannelsComponent,) {
    this.channel.displayStyleAlertError;

  }
  closeAlertEdit() {
    this.channel.displayStyleAlertError = "none";
  }
}
