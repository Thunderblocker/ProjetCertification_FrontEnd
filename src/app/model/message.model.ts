import {User} from "./User";
import {Channel} from "./Channel";

export interface Message{
    id: number;
    contenu: string;
    idUtilisateur: number|any;
    utilisateur: User;
    idCanal: number|any;
    date?: Date|string;
    canal?: Channel;
}
