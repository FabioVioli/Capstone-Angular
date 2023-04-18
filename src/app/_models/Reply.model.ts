import { Tutorial } from "./Tutorial.model";
import { User } from "./User.model";

export class Reply {

  id!: number;
  title: string;
  body: string;
  creationDate: Date;
  lastModifyDate: Date;
  likes: number;
  user: User;
  tutorial: Tutorial;

    constructor(title: string,
      body: string,
      creationDate: Date,
      lastModifyDate: Date,
      likes: number,
      user: User,
      tutorial: Tutorial){

    this.title = title;
    this.body = body;
    this.creationDate = creationDate;
    this.lastModifyDate = lastModifyDate;
    this.likes = likes;
    this.user = user;
    this.tutorial = tutorial;
    }
}
