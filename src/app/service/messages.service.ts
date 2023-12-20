import { Injectable } from '@angular/core';
import { Message } from '../model/message.model';
import { FetcherService } from './fetcher.service';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  messagesList!: Message[];
  sortedMessagesList!: Message[];

  constructor(private fetcher: FetcherService) { 
    this.loadMessagesList();
  }

  loadMessagesList() {
    this.fetcher.getAll<Message>('messages').subscribe(messages => {
      this.messagesList = messages;

      //this.sortedMessagesList = this.messagesList.sort((a, b) => a.date.getTime() - b.date.getTime());
    });
  }

  //
  getAllMessages(): Message[]{
    return this.messagesList;
  }

  //POST MESSAGE
  addNewMessage(message:Message){
    return this.fetcher.post<Message>('messages', message);
  }
}
