import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'app-messages-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './messages-list.component.html',
  styleUrl: './messages-list.component.scss'
})
export class MessagesListComponent {

  constructor(public messagesService: MessagesService) {
    
   }

}
