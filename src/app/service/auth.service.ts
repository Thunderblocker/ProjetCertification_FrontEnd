import { Injectable } from '@angular/core';
import { FetcherService } from './fetcher.service';
import { Observable } from 'rxjs';
import { UserCredentials } from '../model/userCredentials.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fetcher: FetcherService) { }

  login(userCredentials: UserCredentials): Observable<UserCredentials> {
    return this.fetcher.login(userCredentials);
  }
}
