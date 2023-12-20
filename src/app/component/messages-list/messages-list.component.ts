import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { MessagesService } from '../../service/messages.service';

@Component({
  selector: 'app-messages-list',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './messages-list.component.html',
  styleUrl: './messages-list.component.scss'
})
export class MessagesListComponent  {
  currentUserID: number;

  constructor(public messagesService: MessagesService, public datePipe: DatePipe) {
    this.currentUserID = 123;
  }

  

}
