import { Injectable } from '@angular/core';
import { Message } from '../model/message.model';
import { FetcherService } from './fetcher.service';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  messagesList: Message[] = [];
  sortedMessagesList: Message[] = [];
  currentUserID: number | undefined;

  constructor(private fetcher: FetcherService) {
    this.loadMessagesList();
  }

  /* 
    - SERVICE DATA  -------------------------------------------
    Following methods are used to load
    the messages list from the server .
  */

  loadMessagesList() {
    this.fetcher.getAll<Message>('messages').subscribe(messages => {
      this.messagesList = messages;
    });
  }
  
  // SET CURRENT USER ID
  setCurrentUserID(id: number | undefined) {
    if (id !== undefined) {
      this.currentUserID = id;
    }
  }
  
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
