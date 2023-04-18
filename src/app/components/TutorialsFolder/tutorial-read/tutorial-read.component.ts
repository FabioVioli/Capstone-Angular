import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TutorialsService } from 'src/app/services/tutorials.service';

@Component({
  selector: 'app-tutorial-read',
  templateUrl: './tutorial-read.component.html',
  styleUrls: ['./tutorial-read.component.scss']
})
export class TutorialReadComponent {
  constructor(private activatedRoute:ActivatedRoute, private tutorialService: TutorialsService, private router:Router){}

  id:number = Number(this.activatedRoute.snapshot.url[1])
  tutorial!:any;

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


    deletePost(){
      this.tutorialService.deletePost(this.tutorial.id).subscribe();
        this.router.navigate(['/coachings'])
      }

    editPost(){
      this.router.navigate([`/coaching-edit/${this.tutorial.id}`])
    }
}
