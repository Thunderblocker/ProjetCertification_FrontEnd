import { Component } from '@angular/core';
import {HeadComponent} from "../head/head.component";
import {HeaderComponent} from "../header/header.component";


import {FooterComponent} from "../footer/footer.component";
import {ChannelsComponent} from "../channels/channels.component";
import {MessagesComponent} from "../messages/messages.component";

@Component({
  selector: 'app-page-accueil',
  standalone: true,
  imports: [
    HeadComponent,
    HeaderComponent,
    ChannelsComponent,
    MessagesComponent,
    FooterComponent
  ],
  templateUrl: './page-accueil.component.html',
  styleUrl: './page-accueil.component.scss'
})
export class PageAccueilComponent {

}
