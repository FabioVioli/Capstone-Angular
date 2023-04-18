import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LFP } from '../_models/LFP.model';

@Injectable({
  providedIn: 'root'
})
export class LookingForPalService {
  private URL: string = "http://localhost:8080/lfp";
  private httpOptions: HttpHeaders =  new HttpHeaders({
          'Authorization': 'Bearer' + localStorage.getItem('token')
  });

  constructor(private http: HttpClient) { }

  // GET ALL
  getAllLookingForPal(): Observable<LFP[]>{
    return this.http.get<LFP[]> (`${this.URL}`,{headers: this.httpOptions})
  }

  // GET BY ID
  getLFPById(id:number): Observable<LFP>{
    return this.http.get<LFP> (`${this.URL}/${id}`, {headers: this.httpOptions})
  }

  // CHANGE POST STATUS
  changeStatus(lfp:LFP): Observable<LFP>{
    return this.http.put<LFP> (`${this.URL}/update`, lfp, {headers: this.httpOptions})
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
