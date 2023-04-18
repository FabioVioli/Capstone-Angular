import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tutorial } from '../_models/Tutorial.model';
@Injectable({
  providedIn: 'root'
})

export class TutorialsService {

  private URL: string= "http://localhost:8080/tutorials"
  private httpOptions: HttpHeaders =  new HttpHeaders({
    'Authorization': 'Bearer' + localStorage.getItem('token')
  });

  constructor(private http: HttpClient) { }
  // GET ALL
  getAllTutorials(): Observable<Tutorial[]>{
    return this.http.get<Tutorial[]> (`${this.URL}`,{headers: this.httpOptions})
  }

    // GET BY ID
    getLFPById(id:number): Observable<Tutorial>{
      return this.http.get<Tutorial> (`${this.URL}/${id}`, {headers: this.httpOptions})
    }

    // CHANGE POST STATUS
    changeStatus(lfp:Tutorial): Observable<Tutorial>{
      return this.http.put<Tutorial> (`${this.URL}/update`, lfp, {headers: this.httpOptions})
    }

    // DELETE POST
    deletePost(id:number){
      let idString = id.toString();
      return this.http.delete(`${this.URL}/delete/${idString}`, {headers: this.httpOptions})

    }

    // UPDATE POST
    updatePost(lfp:any){
      return this.http.put(`${this.URL}/update`, lfp, {headers: this.httpOptions})

    }

}
