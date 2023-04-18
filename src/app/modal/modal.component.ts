import { Component, } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { DM } from '../_models/DM.model';
import { DmModalService } from '../services/dm-modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})


export class ModalComponent {

  constructor(public modalRef: MdbModalRef<ModalComponent>,
              private dmModalService: DmModalService){}

  sender:string = "";
  textArea:string = "";
  urlString:string = window.location.href.toString()
  id:number = Number(this.urlString.split('/').at(-1))

  sendDm(){
    let parsedStorage = JSON.parse(localStorage.getItem('currentUser') || '{}')
    this.sender = parsedStorage.username;

    let dm:DM = {
    "sender": this.sender,
    "receiverId": this.id,
    "body": this.textArea
    }
    console.log(this.sender,this.id,this.textArea);

     this.dmModalService.sendDm(dm).subscribe();
     this.modalRef.close();
  }
}
