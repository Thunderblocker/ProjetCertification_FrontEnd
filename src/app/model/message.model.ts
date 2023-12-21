
import {User} from "./User";
import {Channel} from "./Channel";



export interface Message{
    id: number;
    contenu: string;
    utilisateur: User;
    date?: Date|string;
    canal?: Channel;
}


