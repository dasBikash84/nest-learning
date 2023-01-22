import { IsOptional, IsString } from "class-validator";

export class CreateMessageDto{
  @IsString({message:'Are you crazy????'})
  content:string;
}