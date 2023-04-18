import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoachingService } from 'src/app/services/coaching.service';
import { MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ModalComponent } from 'src/app/modal/modal.component';

@Component({
  selector: 'app-coaching-read',
  templateUrl: './coaching-read.component.html',
  styleUrls: ['./coaching-read.component.scss']
})
export class CoachingReadComponent {
  constructor(private activatedRoute:ActivatedRoute,
              private coachingService: CoachingService,
              private router:Router,
              private modalService:MdbModalService){}

  id:number = 0;
  coaching!:any;

  // ESTRAPOLAZIONE ID DALL' URL E FETCH SUL POST SPECIFICO
  ngOnInit(): void {

    this.id = Number(this.activatedRoute.snapshot.url[1]
    )
    this.coaching = this.coachingService.getLFPById(this.id).subscribe(
      (e) => {this.coaching = e},(error) =>{
        this.router.navigate(["/coachings"])
      })
    }

      // APRE IL MODALE PER IL DIRECT MESSAGE
      openModal(){
        this.modalService.open(ModalComponent,{
          modalClass: 'modal-dialog-centered'

        });
      }
      // CHECK UTENTE / POST CREATOR
      check(){
        let parsedStorage = JSON.parse(localStorage.getItem('currentUser') || '{}')
        let username:string = parsedStorage.username;
        if(this.coaching.user?.username != username){
          return true;
        }else{
          return false;
       }
      }

      // DELETE POST
      deletePost(){
        this.coachingService.deletePost(this.coaching.id).subscribe();
          this.router.navigate(['/coachings'])
        }
      // EDIT POST
      editPost(){
        this.router.navigate([`/coaching-edit/${this.coaching.id}`])
      }
}
