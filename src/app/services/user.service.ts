import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_models/User.model';
import { DMJava } from '../_models/DMJava.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private URL: string= "http://localhost:8080/user"
  private httpOptions: HttpHeaders =  new HttpHeaders({
    'Authorization': 'Bearer' + localStorage.getItem('token')
  });
  constructor(private http:HttpClient) { }

   // GET BY ID
   getUserByUsername (username:string): Observable<User>{
    return this.http.get<User> (`${this.URL}/data/${username}`, {headers: this.httpOptions})
  }

  // GET USER DIRECT MESSAGES
  getUserLFPs (username:string): Observable<DMJava[]>{
    return this.http.get<DMJava[]> (`${this.URL}/dm/${username}`, {headers: this.httpOptions})
  }
}
