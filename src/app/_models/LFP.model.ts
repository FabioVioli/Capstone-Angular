import { User } from "./User.model";

export class LFP {
  id!: number;
  title: string;
  body: string;
  creationDate: Date;
  lastModifyDate: Date;
  likes: number;
  user: User;
  skills: string[] = [];
  status: boolean;

  constructor(title: string,
              body: string,
              creationDate: Date,
              lastModifyDate: Date,
              likes: number,
              user: User,
              status: boolean){

    this.title = title;
    this.body = body;
    this.creationDate = creationDate;
    this.lastModifyDate = lastModifyDate;
    this.likes = likes;
    this.user = user;
    this.status = status;
  }
}
