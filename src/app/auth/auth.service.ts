import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, catchError, map, throwError } from 'rxjs';
import jwt_decode, { JwtPayload } from 'jwt-decode';
import { Router } from '@angular/router';


export interface User {
  id: number;
  username: string;
  email: string;
  token: string;
}

export interface UserSignUp{
  name:string;
  lastname:string;
  username:string;
  email:string;
  password:string;
  roles:[];
}

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private currentUserSubject: BehaviorSubject<User | null>;
  public currentUser: Observable<User | null>;

  private authStatusSource = new Subject<boolean>();
  public authStatus$ = this.authStatusSource.asObservable();

  private apiUrl = 'http://localhost:8080/api/auth';


  constructor(private http: HttpClient, private router: Router) {
    const storedUser = localStorage.getItem('currentUser');
    this.currentUserSubject = new BehaviorSubject<User | null>(
      storedUser ? JSON.parse(storedUser) : null
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User | null {
    return this.currentUserSubject.value;
  }

  login(data: { username: string; password: string }): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/login`, data).pipe(
      map((user) => {

          //verificare
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          this.updateAuthStatus(true);

          return user;
      })
    );
  }
  register(data:UserSignUp){
    return this.http.post(`${this.apiUrl}/register`,data,{responseType:`text`})
  }

  getToken(){
    const token =JSON.parse(localStorage.getItem("currentUser")!);
    return token.accessToken
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.updateAuthStatus(false);
  }

  isAuthenticated(): boolean {
    const user = this.currentUserValue;
    if (user && user.token) {
      try {
        const decodedToken = jwt_decode<JwtPayload>(user.token);
        const expirationDate = new Date(decodedToken.exp! * 1000);
        return expirationDate > new Date();
      } catch (error) {
        console.error('Error decoding JWT:', error);
      }
    }
    return false;
  }

  updateAuthStatus(status: boolean): void {
    this.authStatusSource.next(status);
  }

  isloggedin(){
    if(localStorage.getItem('currentUser')){
      this.router.navigate(["/home"])
    }
  }

}
