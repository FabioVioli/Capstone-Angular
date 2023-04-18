import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { coaching } from '../_models/coaching.model';

@Injectable({
  providedIn: 'root'
})
export class CoachingService {

    private URL: string = "http://localhost:8080/coaching";
    private httpOptions: HttpHeaders =  new HttpHeaders({
            'Authorization': 'Bearer' + localStorage.getItem('token')
    });

    constructor(private http: HttpClient) { }

    getAllCoachings(): Observable<coaching[]>{
      return this.http.get<coaching[]> (`${this.URL}`,{headers: this.httpOptions})
    }

    // GET BY ID
    getLFPById(id:number): Observable<coaching>{
      return this.http.get<coaching> (`${this.URL}/${id}`, {headers: this.httpOptions})
    }

    // CHANGE POST STATUS
    changeStatus(lfp:coaching): Observable<coaching>{
      return this.http.put<coaching> (`${this.URL}/update`, lfp, {headers: this.httpOptions})
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
