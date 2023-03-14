import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ProviderService {

  private usersUrl = 'api/users';

  constructor(private http: HttpClient) { }

  getHeroes (): Observable<Array<any>> {
    return this.http.get<Array<any>>(this.usersUrl)
  }

}
