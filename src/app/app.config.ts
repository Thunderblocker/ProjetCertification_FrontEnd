import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient} from "@angular/common/http";
import { DatePipe } from '@angular/common';
import {ChannelsComponent} from "./component/channels/channels.component";
import {MessagesComponent} from "./component/messages/messages.component";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(), DatePipe,ChannelsComponent,MessagesComponent]
};
