import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient, withFetch} from "@angular/common/http";
import { DatePipe } from '@angular/common';
import {ChannelsComponent} from "./component/channels/channels.component";
import {MessagesComponent} from "./component/messages/messages.component";

export const appConfig: ApplicationConfig = {
<<<<<<< HEAD
  providers: [provideRouter(routes), provideHttpClient(), DatePipe,ChannelsComponent,MessagesComponent]
=======
  providers: [provideRouter(routes), provideHttpClient(withFetch()), DatePipe]
>>>>>>> 870f68f8207917de9ffa9c42a7ebbee1376c3c53
};
