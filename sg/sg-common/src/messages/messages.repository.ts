import { Injectable } from "@nestjs/common";
import { readFile, writeFile } from "fs/promises";

@Injectable()
export class MessagesRepository{
  constructor(){}

  async findOne(id:string) {
    const data = await readFile('messages.json','utf-8');
    const messages = JSON.parse(data);
    return messages[id];
  }

  async findAll() {
    const data = await readFile('messages.json','utf-8');
    return JSON.parse(data);
  }

  async create(content:string){
    const data = await readFile('messages.json','utf-8');
    const messages = JSON.parse(data);
    const id = Math.floor(Math.random()*9999).toString()
    const newMessage = {
      content, id
    }
    messages[id] = newMessage;
    await writeFile('messages.json',JSON.stringify(messages));
    return newMessage
  }
}