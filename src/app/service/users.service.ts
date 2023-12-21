import { Injectable, OnInit } from "@angular/core";
import { User } from "../model/User";
import { FetcherService } from "./fetcher.service";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class UsersService implements OnInit {

  usersList: User[] = [];
  currentUser: User | undefined;

  constructor(private fetcher: FetcherService) { }

  ngOnInit(): void {
    this.loadUsersList();
    this.loadCurrentUser(1); // Simulate login with user ID 1
  }

  /*
      - SERVICE DATA  -------------------------------------------
      Following methods are used to load
      the users list and the current user
      from the server .
  */

  // GET USERS LIST - ALL USERS
  private loadUsersList(): void {
    this.fetcher.getAll<User>('users').subscribe((data: User[]) => {
      this.usersList = data;
    });
  }

  // LOAD CURRENT USER BY ID
  private loadCurrentUser(userId: number): void {
    this.fetcher.getById<User>('users', userId).subscribe((data: User) => {
      this.currentUser = data;
    });
  }

  //GET CURRENT USER ID
  getCurrentUserId(): number | undefined {
    return this.currentUser?.id;
  }



  //GET ALL USERS
  getTousUtilisateurs() {
    this.getAllUsers();
  }


  /*
      - SERVICE CRUD  -------------------------------------------
  */

  //GET ALL  USERS
  getAllUsers():Observable<User[]> {
    return this.fetcher.getAll<User>('users');
  }

  //GET USER BY ID
  getUserById(id: number): Observable<User> {
    return this.fetcher.getById<User>('users', id);
  }

  //POST NEW USER
  postUser(user: User): Observable<User> {
    return this.fetcher.post<User>('users', user);
  }

  //PUT USER
  putUser(user: User): Observable<User> {
    return this.fetcher.put<User>('users', user);
  }

  //DELETE USER
  deleteUser(id: number): Observable<User> {
    return this.fetcher.delete<User>('users', id);
  }



  /*
    - LOGIN  -------------------------------------------
  */
  loginOLD(user: User): Observable<User> {
    return this.fetcher.post<User>('login', user);
  }

  login(userCredentials : any): Observable<any> {
    return this.fetcher.post<any>('login', userCredentials);
 }
}
