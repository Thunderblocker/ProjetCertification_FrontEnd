import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserCredentials } from '../model/userCredentials.model';

@Injectable({
  providedIn: 'root'
})

/* 
  FETCHER SERVICE 
  This service is used to fetch data from the server.
  It uses the HttpClient to fetch data and returns an Observable.
  The service can be called by other services, and use generic types.
  
*/

export class FetcherService {
  private apiUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) {
  }

  //GET ALL ITEMS
  getAll<T>(item: string): Observable<T[]> {
    return this.http.get<T[]>(`${this.apiUrl}${item}`);
  }  
  
  //GET ITEM BY ID
  getById<T>(item: string, id: number): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}${item}/${id}`);
  }

  //POST NEW ITEM
  post<T>(item: string, itemToAdd: T): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}${item}`, itemToAdd);
  }

  //PUT ITEM
  put<T>(item: string, itemToUpdate: T): Observable<T> {
    return this.http.put<T>(`${this.apiUrl}${item}`, itemToUpdate);
  }

  //DELETE ITEM
  delete<T>(item: string, id: number): Observable<T> {
    return this.http.delete<T>(`${this.apiUrl}${item}/${id}`);
  }

  //LOGIN
  login(userCredentials: UserCredentials): Observable<UserCredentials> {
    const thing = this.http.post<UserCredentials>(`${this.apiUrl}login`, userCredentials);
    console.log(thing);
    return thing;
  }
}
