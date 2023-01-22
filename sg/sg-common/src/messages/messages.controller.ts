import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';


@Controller('messages')
export class MessagesController {

  constructor(private messsageService:MessagesService){}

  @Get()
  async getAll(){
    const messages = await this.messsageService.findAll();
    return {messages};
  }

  @Post()
  async saveMessage(@Body() data:CreateMessageDto){
    console.log(data);
    const message = await this.messsageService.create(data.content);
    return {message};
  }

  @Get('/:id')
  async getById(@Param('id') messageId:string){
    const message = await this.messsageService.findOne(messageId);
    console.log(message);
    if(!message){
      throw new NotFoundException(`message not found with id: ${messageId}`);
    }
    return {message};
  }
}
