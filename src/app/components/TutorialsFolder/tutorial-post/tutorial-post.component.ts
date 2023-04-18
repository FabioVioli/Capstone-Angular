import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { newPost } from 'src/app/_models/newPost.model';

@Component({
  selector: 'app-tutorial-post',
  templateUrl: './tutorial-post.component.html',
  styleUrls: ['./tutorial-post.component.scss']
})
export class TutorialPostComponent {
  constructor( private http: HttpClient, private router: Router){}

  username: string ="";
  title: string = "";
  skills: string[] = [];
  body: string = "";

  private URL: string = "http://localhost:8080/tutorials/post";
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


  createNewPost(){
    let parsedStorage = JSON.parse(localStorage.getItem('currentUser') || '{}')
    this.username = parsedStorage.username;

    let newPost:newPost = {
      "username": this.username,
      "skills": this.skills,
      "titolo": this.title,
      "annuncio": this.body
    }

    if(this.skills.length == 0){
      alert("Select at least one skill!");
    }else if(this.skills.length > 6){
      alert("You can select a maximum of 6 skills")
    }else if(this.title.length < 10){
      alert("Title must be at least long 10 characters");
    }else if(this.body.length< 20){
      alert("Message must be at least long 20 characters");
    }else{
      this.http.post(this.URL, newPost,{headers: this.httpOptions}).subscribe()
      setTimeout(() => {
        this.router.navigate(["/tutorials"]);
        console.log("tutorial creato!");
      }, 100);
    }
    }


  toggle(skill:string){
    if(this.skills.includes(skill)){
      this.skills = this.skills.filter(e => !e.includes(skill));
    }else{
      this.skills.push(skill);
    }
    console.log(this.skills);
  }
}
