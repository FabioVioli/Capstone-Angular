import { Component, OnInit } from '@angular/core';
import { DMJava } from 'src/app/_models/DMJava.model';
import { User } from 'src/app/_models/User.model';
import { UserService } from 'src/app/services/user.service';
import { DmModalService } from 'src/app/services/dm-modal.service';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  constructor(private userService: UserService,
              private dmService: DmModalService){}
  user!:User;
  dmList!:DMJava[];



  ngOnInit(): void {
    let parsedStorage = JSON.parse(localStorage.getItem('currentUser') || '{}')
    let username:string = parsedStorage.username;


    this.userService.getUserByUsername(username).subscribe(
      (e) => {this.user = e}
    )

    this.userService.getUserLFPs(username).subscribe(
      (e) => {this.dmList = e}

    )

  }

  deleteDM(id:number){
    this.dmService.deleteDM(id).subscribe(
      e => this.ngOnInit()
      );

  }
}
