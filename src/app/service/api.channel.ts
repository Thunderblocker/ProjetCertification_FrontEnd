import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Channel} from "../model/Channel";


@Injectable({
  providedIn: 'root',
})
export class ApiChannel {
  constructor(private http: HttpClient) {
  }


  url:string ='http://localhost:5000/channels';


  getAllChannels():Observable<Channel[]> {
    return this.http.get<Channel[]>(this.url);
  }








}




