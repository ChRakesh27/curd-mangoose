import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { environment as env } from 'src/environments/environment';
import { json, response } from 'express';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  headers: HttpHeaders;
  constructor(private client: HttpClient) {
    this.headers = new HttpHeaders({ 'content-type': 'application/json' })
  }

  GetUsers(): Observable<User[]> {
    return this.client.get<User[]>(env.apiAddress + '/user');
  }
  GetUser(id: string): Observable<User> {
    return this.client.get<User>(env.apiAddress + '/user/' + id);
  }
  AddUser(user: User): Observable<HttpResponse<any>> {
    return this.client.post<HttpResponse<any>>(env.apiAddress + '/user/', JSON.stringify(user), { headers: this.headers, observe: 'response' })
  }
  UpdateUser(user: User): Observable<HttpResponse<any>> {
    return this.client.put<HttpResponse<any>>(env.apiAddress + '/user/' + user._id, JSON.stringify(user), { headers: this.headers, observe: 'response' })
  }
  DeleteUser(id: string): Observable<HttpResponse<any>> {
    return this.client.delete<HttpResponse<any>>(env.apiAddress + '/user/' + id, { observe: 'response' });
  }
}

// env----> apiAddress: 'http://localhost:3000'