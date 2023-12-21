import {User} from "./User";

export interface CloneChannel {
     id: number;
     nom:string;
     utilisateur?:User[];
}
