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
    console.log("Log from MessagesService constructor");
  }

  loadMessagesList() {
    this.fetcher.getAll<Message>('messages').subscribe(messages => {
      this.messagesList = messages;
      console.log("Log from MessagesService loadMessagesList - Done");
    });
  }

  // GET ALL MESSAGES
  getAllMessages(): Message[] {
    return this.messagesList;
  }

  // POST MESSAGE
  addNewMessage(message: Message) {
    return this.fetcher.post<Message>('messages', message);
  }

  // SET CURRENT USER ID
  setCurrentUserID(id: number | undefined) {
    if (id !== undefined) {
      this.currentUserID = id;
    }
  }
}
