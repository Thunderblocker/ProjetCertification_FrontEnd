import { Injectable, OnInit } from "@angular/core";
import { User } from "../model/User";
import { ApiUsers } from "./api.users";
import { FetcherService } from "./fetcher.service";

@Injectable({
  providedIn: 'root'
})
export class UsersService implements OnInit {

  usersList: User[] = [];
  currentUser: User | undefined;

  constructor(private fetcher: FetcherService) { }

  ngOnInit(): void {
    this.fetchUsersList();
    this.fetchCurrentUser(1); // Simulate login with user ID 1
    console.log("Log from UsersService ngOnInit");
  }

  private fetchUsersList(): void {
    this.fetcher.getAll<User>('users').subscribe((data: User[]) => {
      this.usersList = data;
      console.log("Log from UsersService fetchUsersList");
    });
  }

  private fetchCurrentUser(userId: number): void {
    this.fetcher.getById<User>('users', userId).subscribe((data: User) => {
      this.currentUser = data;
      console.log("Log from UsersService fetchCurrentUser");
    });
  }

  getCurrentUserId(): number | undefined {
    return this.currentUser?.id;
  }
}
