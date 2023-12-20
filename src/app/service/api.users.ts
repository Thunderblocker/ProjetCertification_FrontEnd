import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {Channel} from "../model/Channel";
import {User} from "../model/User";


@Injectable({
  providedIn: 'root',
})
export class ApiUsers {
  constructor(private http: HttpClient) {
  }



 //GET ALL  USERS
  getAllUsers():Observable<User[]> {
    return this.http.get<User[]>('http://localhost:8080/users');
  }







}




