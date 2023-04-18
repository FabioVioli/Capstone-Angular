import { DM } from "./DM.model";
import { LFP } from "./LFP.model";
import { Tutorial } from "./Tutorial.model";
import { coaching } from "./coaching.model";

export class User {
  id!: number;
  username: string;
  email: string;
  password: string;
  roles = [];
  coaching: coaching;
  tutorialList: Tutorial[];
  lfpList: LFP[];
  dmList: DM[];


  constructor(username: string,
              email: string,
              password: string,
              roles:[],
              id: number,
              coaching: coaching,
              tutorialList: Tutorial[],
              lfpList: LFP[],
              dmList: DM[] ){
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;
    this.roles = roles;
    this.coaching = coaching;
    this.tutorialList = tutorialList;
    this.lfpList = lfpList
    this.dmList = dmList
  }
}
