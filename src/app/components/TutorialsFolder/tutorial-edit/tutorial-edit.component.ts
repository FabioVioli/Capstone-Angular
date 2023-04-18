import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LookingForPalService } from 'src/app/services/looking-for-pal.service';
import { TutorialsService } from 'src/app/services/tutorials.service';

@Component({
  selector: 'app-tutorial-edit',
  templateUrl: './tutorial-edit.component.html',
  styleUrls: ['./tutorial-edit.component.scss']
})
export class TutorialEditComponent {
  constructor( private router: Router,private activatedRoute:ActivatedRoute, private tutorialService: TutorialsService){}

  username: string ="";
  title: string = "";
  skills: string[] = [];
  body: string = "";
  id:number = 0;
  tutorial!:any;

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

    this.tutorial = this.tutorialService.getLFPById(this.id).subscribe(
      (e) => {this.tutorial = e},(error) =>{
        this.router.navigate(["/tutorials"])
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
  editPost(tutorial:any){
    if(this.skills.length == 0){
      alert("Select at least one skill!");
    }else if(this.skills.length > 6){
      alert("You can select a maximum of 6 skills")
    }else if(this.tutorial.title.length < 10){
      alert("Title must be at least long 10 characters");
    }else if(this.tutorial.body.length < 20){
      alert("Message must be at least long 20 characters");
    }else{
      this.tutorial.skills = this.skills;
    this.tutorialService.updatePost(tutorial).subscribe();
    this.router.navigate([`/tutorials`])
    }

  }
}
