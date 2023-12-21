import { Channel } from "./Channel";
import { User } from "./User";

export interface Message{
    id: number;
    contenu: string;
    utilisateur: User;
    canal: Channel;
    date: Date;
}