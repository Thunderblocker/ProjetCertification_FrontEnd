import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {Channel} from "../model/Channel";


@Injectable({
  providedIn: 'root',
})
export class ApiChannel implements OnInit {
  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
      this.getAllChannels();
  }

 //GET ALL  CHANNELS
  getAllChannels():Observable<Channel[]> {
    return this.http.get<Channel[]>('http://localhost:8080/channels');
  }

  //GET CHANNEL BY ID
  getChannelById(id:number):Observable<Channel> {
    return this.http.get<Channel>(`http://localhost:8080/channels/${id}`);
  }

  //EDIT  CHANNEL
  updateChannel( channel: Channel):Subscription  {
    return this.http.put('http://localhost:8080/channels',channel).subscribe((res) => {
      console.log( res);
    });

  }

  //DELETE CHANNEL
  deleteChannel(id:number){
    return this.http.delete('http://localhost:8080/channels/'+id).subscribe((res) => {
      console.log( res);
    });
  }

  //POST NEW CHANNEL
  postNewChannel( channel: Channel):Subscription  {
    // console.log ('nom channel  = '+ channel.nom);
    return this.http.put('http://localhost:8080/channels',channel).subscribe((res) => {
      console.log( res);
    });

  }

  //GET  UPDATE LIST  CHANNELS
  getAllUpdateChannel():Observable<Channel[]> {
    return this.http.get<Channel[]>('http://localhost:8080/channels');
  }





}




