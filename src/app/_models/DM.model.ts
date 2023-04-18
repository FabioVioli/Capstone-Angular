export class DM {
  sender: string;
  receiverId: number;
  body: string;

  constructor(sender: string, receiverId: number, body:string){
    this.sender =sender ;
    this.receiverId = receiverId;
    this.body = body;
  }
}
