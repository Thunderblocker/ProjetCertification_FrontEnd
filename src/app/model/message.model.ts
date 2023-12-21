<<<<<<< HEAD
import {User} from "./User";
import {Channel} from "./Channel";
=======
import { Channel } from "./Channel";
import { User } from "./User";
>>>>>>> 870f68f8207917de9ffa9c42a7ebbee1376c3c53

export interface Message{
    id: number;
    contenu: string;
<<<<<<< HEAD
    idUtilisateur: number|any;
    utilisateur: User;
    idCanal: number|any;
    date?: Date|string;
    canal?: Channel;
}
=======
    utilisateur: User;
    canal: Channel;
    date: Date;
}
>>>>>>> 870f68f8207917de9ffa9c42a7ebbee1376c3c53
