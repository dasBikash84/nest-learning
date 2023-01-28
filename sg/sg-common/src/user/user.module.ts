import { Module } from '@nestjs/common';
import { userFeature } from 'src/db/mongodb.typeorm';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [
    userFeature
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
