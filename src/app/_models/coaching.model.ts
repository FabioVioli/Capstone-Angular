import { User } from "./User.model";

export class coaching {
  id!: number;
  title: string;
  body: string;
  creationDate: Date;
  lastModifyDate: Date;
  likes: number;
  user: User;
  skills:string[] = [];

  constructor(title: string,
              body: string,
              creationDate: Date,
              lastModifyDate: Date,
              likes: number,
              user: User){

    this.title = title;
    this.body = body;
    this.creationDate = creationDate;
    this.lastModifyDate = lastModifyDate;
    this.likes = likes;
    this.user = user;
  }
}
