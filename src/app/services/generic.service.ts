import { Injectable } from '@angular/core';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class GenericService {

  constructor(private router: Router) { }

  isloggedin(){
    if(localStorage.getItem('currentUser')){
      this.router.navigate(["/home"])
    }


  }
}
