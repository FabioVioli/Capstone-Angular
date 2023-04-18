import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LookingForPalService } from 'src/app/services/looking-for-pal.service';
import { MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ModalComponent } from 'src/app/modal/modal.component';

@Component({
  selector: 'app-lfp-read-post',
  templateUrl: './lfp-read-post.component.html',
  styleUrls: ['./lfp-read-post.component.scss']
})
export class lfpReadPostComponent implements OnInit{

  currentItem:string = this.activatedRoute.snapshot.url[1].path;


  constructor(private activatedRoute:ActivatedRoute,
              private lfpService: LookingForPalService,
              private router:Router,
              private modalService:MdbModalService){
              }

  id:number = Number(this.activatedRoute.snapshot.url[1].path);
  lfp!:any;



  ngOnInit(): void {

    this.lfp = this.lfpService.getLFPById(this.id).subscribe(
      (e) => {this.lfp = e},(error) =>{
        this.router.navigate(["/lfp"])
      })
    }

    checkDM(){
    if(this.lfp.status){
      let parsedStorage = JSON.parse(localStorage.getItem('currentUser') || '{}')
      let username:string = parsedStorage.username;

      if(this.lfp.user.username != username){
        return true;
      }else{
        return false;
     }
    }
    return false;
    }

    // APRE IL MODALE PER IL DIRECT MESSAGE
    openModal(){
      this.modalService.open(ModalComponent,{
        modalClass: 'modal-dialog-centered'
      })
    }
     // CHECK UTENTE / POST CREATOR
    check(){
      let parsedStorage = JSON.parse(localStorage.getItem('currentUser') || '{}')
      let username:string = parsedStorage.username;
      if(this.lfp.user?.username != username){
        return true;
      }else{
        return false;
     }
    }

    checkStatus(){
      let parsedStorage = JSON.parse(localStorage.getItem('currentUser') || '{}')
      let username:string = parsedStorage.username;
      if(this.lfp.status && username != this.lfp.user.username ){
        return true
      }else{
        return false;
      }
    }

    // DELETE POST
    deletePost(){
      this.lfpService.deletePost(this.lfp.id).subscribe();
        this.router.navigate(['/lfp'])
      }
    // EDIT POST
    editPost(lfp:any){
      this.router.navigate([`/edit-post/${lfp.id}`])
    }
}
