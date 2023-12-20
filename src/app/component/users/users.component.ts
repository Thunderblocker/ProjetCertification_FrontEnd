import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {UsersService} from "../../service/users.service";
import {User} from "../../model/User";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {

  userslist:User[];
   constructor( public users:UsersService) {
   this.userslist =  this.users.usersList;
  }


}
