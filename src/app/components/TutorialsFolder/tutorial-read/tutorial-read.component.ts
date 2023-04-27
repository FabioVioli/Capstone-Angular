import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tutorial } from 'src/app/_models/Tutorial.model';
import { TutorialsService } from 'src/app/services/tutorials.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-tutorial-read',
  templateUrl: './tutorial-read.component.html',
  styleUrls: ['./tutorial-read.component.scss']
})
export class TutorialReadComponent {
  constructor(private activatedRoute:ActivatedRoute,
              private tutorialService: TutorialsService,
              private router:Router,
              private userService: UserService){}

  id:number = Number(this.activatedRoute.snapshot.url[1])
  tutorial!:any;
  booleanValue!:Boolean;

  // ESTRAPOLAZIONE ID DALL' URL E FETCH SUL POST SPECIFICO
  ngOnInit(): void {

    this.tutorial = this.tutorialService.getLFPById(this.id).subscribe(
      (e) => {this.tutorial = e},(error) =>{
        this.router.navigate(["/tutorials"])
      })
    }

    check(){
      let parsedStorage = JSON.parse(localStorage.getItem('currentUser') || '{}')
      let username:string = parsedStorage.username;

      if(this.tutorial.user?.username != username){
        return true;
      }else{
        return false;
     }
    }

    tutorialHasLike(){
      let parsedStorage = JSON.parse(localStorage.getItem('currentUser') || '{}')
      let username:string = parsedStorage.username;

      return this.userService.checkIfTutorialHasLike(username, this.id)

    }

    toggleLikeUnlike(){
      let parsedStorage = JSON.parse(localStorage.getItem('currentUser') || '{}')
      let username:string = parsedStorage.username;

      return this.userService.toggleLikeUnlike(username, this.tutorial.id)
    }


    deletePost(){
      this.tutorialService.deletePost(this.tutorial.id).subscribe();
        this.router.navigate(['/coachings'])
      }

    editPost(){
      this.router.navigate([`/tutorial-edit/${this.id}`])
    }
}
