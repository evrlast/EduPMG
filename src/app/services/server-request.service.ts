import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServerRequestService {

  serverUrl: string = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  get<T>(route: string) {
    return this.http.get<T>(`${this.serverUrl}/${route}`)
  }

  post<T>(route: string, body: any) {
    return this.http.post<T>(`${this.serverUrl}/${route}`, body)
  }
}
