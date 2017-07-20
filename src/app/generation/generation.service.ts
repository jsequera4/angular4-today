import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Person} from "./Person.model";
import {Http, Response} from "@angular/http";

@Injectable()
export class GenerationService {

  private usersUrl = 'http://jsonplaceholder.typicode.com/users';

  constructor(private http: Http) { }

  getAllUsers(): Observable<Person[]> {
    return this.http.get(this.usersUrl)
        .map(GenerationService.extractData)
        .catch(GenerationService.handleError);
  }

  private static extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private static handleError (error: Response | any) {
    // Use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
