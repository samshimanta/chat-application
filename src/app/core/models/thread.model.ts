
import { uuid } from "../util/uuid";
import { Message } from "./message.model";

/*
* Thread represents a group of Users exchanging Messages
*/



export class Thread {
    id: string;
    lastMessage!: Message;
   

    constructor(
        id?: string,
        public name?:string,
        public avatarSrc?:string){
            this.id = id || uuid();
        }
}