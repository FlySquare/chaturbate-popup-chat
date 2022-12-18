import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  apiUrl = "https://chaturbate.com/";


  constructor(private httpClient: HttpClient) {
  }

  getChat(username: string): Observable<any> {
    return this.httpClient.get(this.apiUrl + username, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    });
  }
}
