import {Injectable} from "@angular/core";
import {User} from "../model/User";
import {ApiUsers} from "./api.users";
import {Channel} from "../model/Channel";


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


  //GET ALL USERS
  getTousUtilisateurs() {
    return this.apiUsers.getAllUsers().subscribe((data:User[]) => {
      this.usersList = data;
    });
  }












}
