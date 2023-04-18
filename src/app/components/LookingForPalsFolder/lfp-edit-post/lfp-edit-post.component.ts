import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LookingForPalService } from 'src/app/services/looking-for-pal.service';

@Component({
  selector: 'app-lfp-edit-post',
  templateUrl: './lfp-edit-post.component.html',
  styleUrls: ['./lfp-edit-post.component.scss']
})
export class lfpEditPostComponent {
  constructor( private http: HttpClient, private router: Router,private activatedRoute:ActivatedRoute, private lfpService: LookingForPalService){}

  skills: string[] = [];
  id:number = 0;
  lfp!:any;

  private URL: string = "http://localhost:8080/lfp/post";
  private httpOptions: HttpHeaders =  new HttpHeaders({
          'Authorization': 'Bearer' + localStorage.getItem('token')
  });

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
    let parsedStorage = JSON.parse(localStorage.getItem('currentUser') || '{}')
    let user: string = parsedStorage.username;

    this.lfp = this.lfpService.getLFPById(this.id).subscribe(
      (e) => {this.lfp = e}
      )
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
  editPost(lfp:any){
    if(this.skills.length == 0){
      alert("Select at least one skill!");
    }else if(this.skills.length > 6){
      alert("You can select a maximum of 6 skills")
    }else if(this.lfp.title.length < 10){
      alert("Title must be at least long 10 characters");
    }else if(this.lfp.body.length < 20){
      alert("Message must be at least long 20 characters");
    }else{
    this.lfp.skills = this.skills;
    this.lfpService.updatePost(lfp).subscribe();
    this.router.navigate([`/lfp`])
    }
  }
}
