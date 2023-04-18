import { Component, OnInit } from '@angular/core';
import { AuthServiceService} from '../auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, catchError, of } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  selectedValue:Array<any> = [];
  user: any;
  error:string = "";

  constructor(private authService: AuthServiceService, private router: Router){}
  ngOnInit(): void {
    this.authService.isloggedin()
  }


  onSubmit(form:NgForm): void {
     this.authService.register(form.value).pipe(catchError((error:any,_caught:Observable<any>):Observable<any> =>{
      this.error = error.error

      return of()
     })).subscribe(
      (data) => {
         console.log('success', data);
        this.user = data;
        this.router.navigate(["/login"])
      },
     )
  }
}

