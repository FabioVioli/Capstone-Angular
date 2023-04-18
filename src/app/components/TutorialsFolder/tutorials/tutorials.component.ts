import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Tutorial } from 'src/app/_models/Tutorial.model';
import { TutorialsService } from 'src/app/services/tutorials.service';

@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.component.html',
  styleUrls: ['./tutorials.component.scss']
})
export class TutorialsComponent {

  tutorialsList: Tutorial[] = [];
  constructor(private tutorialService: TutorialsService, private router: Router){}

  ngOnInit(): void {
    if (localStorage.getItem('currentUser')){
      this.tutorialService.getAllTutorials().subscribe(
        tutorials => this.tutorialsList = tutorials
        )
    }else{
      this.router.navigate(["/login"])
    }

  }

  ngOnDestroy(): void {

  }
  // POST NEW TUTORIAL


  // CHECK PER VEDERE SE L'UTENTE HA ACCESSO ALLE MODIFICHE
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
    this.tutorialService.deletePost(id).subscribe(
      e => this.ngOnInit()
    );

  }

  // APRE IL POST
  openPost(id:number){
    this.router.navigate([`/tutorial-read/${id}`])
  }

  // MODIFICA IL POST
  editPost(id:number){
    this.router.navigate([`/tutorial-edit/${id}`])
  }
}
