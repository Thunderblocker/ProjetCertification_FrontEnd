import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetcherService {
  private apiUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  getAll<T>(item: string): Observable<T[]>{
    return this.http.get<T[]>(`${this.apiUrl}${item}`);
  }  
  
  getById<T>(item: string, id: number): Observable<T>{
    return this.http.get<T>(`${this.apiUrl}/${item}/${id}`);
  }

  //POST NEW ITEM
  post<T>(item: string, itemToAdd: T): Observable<T>{
    return this.http.post<T>(`${this.apiUrl}${item}`, itemToAdd);
  }
}
