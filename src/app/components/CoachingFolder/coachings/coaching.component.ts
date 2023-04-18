import { Component } from '@angular/core';
import { coaching } from 'src/app/_models/coaching.model';
import { CoachingService } from 'src/app/services/coaching.service';
import { OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-coaching',
  templateUrl: './coaching.component.html',
  styleUrls: ['./coaching.component.scss']
})
export class CoachingComponent implements OnInit, OnDestroy {

  coachingList: coaching[] = [];

  constructor(private coachingService: CoachingService, private router: Router, private genericService: GenericService){}

  ngOnInit(): void {
    if (localStorage.getItem('currentUser')){
    this.coachingService.getAllCoachings().subscribe(
      coaching => this.coachingList = coaching
    )
  }else{
    this.router.navigate(["/login"])
  }
  }

    ngOnDestroy(): void {
    }

    // CONTROLLO PER VEDERE SE L'UTENTE LOGGATO HA ACCESSO A MODIFCARE UN POST
    editPanelCheck(username:string){
      let parsedStorage = JSON.parse(localStorage.getItem('currentUser') || '{}')
      let user: string = parsedStorage.username;

      if(user === username){
        return true;
      }else{
        return false;
      }

    }

    // CANCELLA IL POST
    deletePost(id:number){
      this.coachingService.deletePost(id).subscribe(e => this.ngOnInit());

    }

    // APRE IL POST
    openPost(id:number){
      this.router.navigate([`/coaching-read/${id}`])
    }

    // MODIFICA IL POST

    editPost(id:number){
      this.router.navigate([`/coaching-edit/${id}`])
    }









}
