import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {MessagesService} from "../../service/messages.service";

@Component({
  selector: 'app-messages',
  standalone: true,
    imports: [
        NgForOf
    ],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.scss'
})
export class MessagesComponent {
  constructor(public messagesService: MessagesService) {

  }
}
