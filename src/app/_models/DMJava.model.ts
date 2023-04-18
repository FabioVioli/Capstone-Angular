import { User } from "./User.model";

export class DMJava {
  id:number;
  sender: User;
  receiver: User;
  body: string;

  constructor(id:number, sender: User, receiver: User, body:string){
    this.id = id;
    this.sender =sender ;
    this.receiver = receiver;
    this.body = body;
  }
}
