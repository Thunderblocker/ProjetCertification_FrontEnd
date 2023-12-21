import { Injectable } from '@angular/core';
import { FetcherService } from './fetcher.service';
import { Observable, catchError, map, of } from 'rxjs';
import { UserCredentials } from '../model/userCredentials.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fetcher: FetcherService) { }

  login(userCredentials: UserCredentials): Observable<boolean> {
    return this.fetcher.login(userCredentials)
      .pipe(
        map((data: any) => {
          console.log('Login successful. Response:', data);
          return true;
        }),
        catchError((error: any) => {
          console.error('Error login', error);
          return of(false);
        })
      );
  }
}
