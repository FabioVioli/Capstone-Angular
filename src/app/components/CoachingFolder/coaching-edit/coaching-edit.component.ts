import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoachingService } from 'src/app/services/coaching.service';

@Component({
  selector: 'app-coaching-edit',
  templateUrl: './coaching-edit.component.html',
  styleUrls: ['./coaching-edit.component.scss']
})
export class CoachingEditComponent {

  constructor( private router: Router,private activatedRoute:ActivatedRoute, private coachingService: CoachingService){}

  skills: string[] = [];
  id:number = 0;
  coaching!:any;

  skillsList: string[] = [
    //FRONTEND
    //########
    "HTML",
    "CSS",
    "JAVASCRIPT",
    "TYPESCRIPT",
    "ANGULAR",
    "REACT",
    "VUEJS",
    //BACKEND
    //########
    "JAVA",
    "JAVA-SPRINGBOOT",
    "PHP",
    "C#",
    "C++",
    "NODEJS",
    //DATABASE
    //########
    "MYSQL",
    "POSTGRESQL",
    "ORACLE",
    "MONGODB"
  ]

  // ESTRAPOLAZIONE ID DALL' URL E FETCH SUL POST SPECIFICO
  ngOnInit(): void {
    this.id = Number(this.activatedRoute.snapshot.url[1].path
    )

    this.coaching = this.coachingService.getLFPById(this.id).subscribe(
      (e) => {this.coaching = e},(error) =>{
        this.router.navigate(["/coachings"])
      })
    }

  // TOGGLE SKILLS
  toggle(skill:string){
    if(this.skills.includes(skill)){
      this.skills = this.skills.filter(e => !e.includes(skill));
    }else{
      this.skills.push(skill);
    }
    console.log(this.skills);
  }

  // UPDATE POST
  editPost(coaching:any){
    if(this.skills.length == 0){
      alert("Select at least one skill!");
    }else if(this.skills.length > 6){
      alert("You can select a maximum of 6 skills")
    }else if(this.coaching.title.length < 10){
      alert("Title must be at least long 10 characters");
    }else if(this.coaching.body.length < 20){
      alert("Message must be at least long 20 characters");
    }else{
      this.coaching.skills = this.skills;
      this.coachingService.updatePost(coaching).subscribe();
      this.router.navigate([`/coachings`])
    }

  }
}
