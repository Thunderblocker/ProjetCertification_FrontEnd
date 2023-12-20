import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {Channel} from "../models/Channel";


@Injectable({
  providedIn: 'root',
})
export class ApiChannel {
  constructor(private http: HttpClient) {
  }



 //GET ALL  CHANNELS
  getAllChannels():Observable<Channel[]> {
    return this.http.get<Channel[]>('http://localhost:8080/channels');
  }

  //EDIT  CHANNEL
  updateChannel( channel: Channel):Subscription  {
    // console.log ('id = '+ channel.id);
    // console.log ('nom channel  = '+ channel.nom);
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






}




