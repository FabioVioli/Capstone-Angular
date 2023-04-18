import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LFP } from 'src/app/_models/LFP.model';
import { LookingForPalService } from 'src/app/services/looking-for-pal.service';
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-looking-for-pal',
  templateUrl: './looking-for-pal.component.html',
  styleUrls: ['./looking-for-pal.component.scss']
})
export class LookingForPalComponent implements OnInit, OnDestroy{

  lfpList: LFP[] = [];

  constructor(private lfpService: LookingForPalService, private router: Router, private genericService: GenericService){}

    ngOnInit(): void {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      if (localStorage.getItem('currentUser')){
        this.lfpService.getAllLookingForPal().subscribe(
          lfp => this.lfpList = lfp
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
    // CAMBIO DI STATUS PER IL POST DA ATTIVO A CHIUSO
    toggleStatus(lfp:LFP){
      if(lfp.status == true){
        lfp.status = false;
        this.lfpService.changeStatus(lfp).subscribe()
        return;
      }else{
      lfp.status = true;
      this.lfpService.changeStatus(lfp).subscribe()
      return;
      }
    }

    // CANCELLA IL POST
    deletePost(id:number){
      this.lfpService.deletePost(id).subscribe(e => this.ngOnInit());

    }

    // APRE IL POST
    openPost(lfp:LFP){
      this.router.navigate([`/read-post/${lfp.id}`])
    }

    // MODIFICA IL POST

    editPost(id:number){
      this.router.navigate([`/edit-post/${id}`])
      this.ngOnInit();
    }
}
