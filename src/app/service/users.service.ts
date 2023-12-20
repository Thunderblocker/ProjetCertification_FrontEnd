import {Injectable} from "@angular/core";
import {User} from "../model/User";
import {ApiUsers} from "./api.users";


@Injectable({
  providedIn: 'root'
})
export class UsersService {

   usersList!: User[];

  constructor(private apiUsers: ApiUsers) {
    this.apiUsers.getAllUsers().subscribe((data:User[]) => {
      this.usersList = data;
    });

  }











}
