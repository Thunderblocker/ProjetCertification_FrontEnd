import { Injectable } from '@angular/core';
import { Message } from '../model/message.model';
import { FetcherService } from './fetcher.service';
import { ChannelsService } from './channels.service';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  messagesList: Message[] = [];
  sortedMessagesList: Message[] = [];
  //currentUserID: number | undefined;

  constructor(private fetcher: FetcherService, private channel: ChannelsService) {
    this.messagesFiltree();
  }

  messagesFiltree()
  {
    this.fetcher.getAll<Message>('messages').subscribe(messages => {
      this.messagesList = messages;
      console.log(messages)
      this.sortedMessagesList = this.messagesList.filter((message)=>message.canal!.id == this.channel.currentChannel.id)
    });
  }

  /* 
    - SERVICE DATA  -------------------------------------------
    Following methods are used to load
    the messages list from the server .
  */

  loadMessagesList() {
    this.fetcher.getAll<Message>('messages').subscribe(messages => {
      this.messagesList = messages;
      console.log(messages)
    });
  }
  
  // SET CURRENT USER ID
  /* setCurrentUserID(id: number | undefined) {
    if (id !== undefined) {
      this.currentUserID = id;
    }
  } */
  
  /* 
    - SERVICE CRUD  -------------------------------------------
  */

  // GET ALL MESSAGES
  getAllMessages(): Message[] {
    return this.messagesList;
  }

  // POST MESSAGE
  addNewMessage(message: Message) {
    return this.fetcher.post<Message>('messages', message);
  }

  //DELETE MESSAGE
  deleteMessage(id: number) {
    return this.fetcher.delete<Message>('messages', id);
  }

}
