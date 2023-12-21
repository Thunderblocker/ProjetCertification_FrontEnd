import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeadComponent } from '../head/head.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { UsersService } from '../../service/users.service';
import { User } from '../../model/User';
import { UsersListComponent } from '../users-list/users-list.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, HeadComponent, HeaderComponent, FooterComponent, UsersListComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent  {
  

  constructor(public userService: UsersService) { }

  
}
