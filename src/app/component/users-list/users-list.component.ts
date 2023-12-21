import { Component } from '@angular/core';
import { UsersService } from '../../service/users.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {

  constructor(public usersService: UsersService) { }
}
