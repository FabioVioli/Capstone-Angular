import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DM } from '../_models/DM.model';


@Injectable({
  providedIn: 'root'
})
export class DmModalService {
  private URL: string = "http://localhost:8080/dm";
  private httpOptions: HttpHeaders =  new HttpHeaders({
          'Authorization': 'Bearer' + localStorage.getItem('token')
  });
  constructor(private http: HttpClient) { }

  // POST DM
  sendDm(dm:DM): Observable<DM>{
    return this.http.post<DM> (`${this.URL}/post`,dm,{headers: this.httpOptions})
  }

  // DELETE DM

  deleteDM(id:number){
    return this.http.delete(`${this.URL}/delete/${id}`,{headers: this.httpOptions})
  }
}
