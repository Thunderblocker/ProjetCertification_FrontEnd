import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { MessagesService } from '../../service/messages.service';
import { UsersService } from '../../service/users.service';

@Component({
  selector: 'app-messages-list',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './messages-list.component.html',
  styleUrl: './messages-list.component.scss'
})
export class MessagesListComponent implements OnInit {
  currentUserID!: number;

  constructor(
    public messagesService: MessagesService,
    public datePipe: DatePipe,
    private userService: UsersService
  ) {}

  ngOnInit(): void {
    this.currentUserID = this.userService.getCurrentUserId()!;
    console.log("log from messages list component onInit");
  }
}