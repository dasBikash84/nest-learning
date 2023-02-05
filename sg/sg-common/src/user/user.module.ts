import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { userFeature } from 'src/db/mongodb.typeorm';
import { CurrentUserInterceptor } from 'src/interceptors/current-user.interceptors';
import { ReqHeaderParserInterceptor } from 'src/interceptors/req-header-gen.interceptors';
import { AuthService } from './auth.service';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [
    userFeature,
  ],
  controllers: [UserController],
  providers: [
    UserService,
    AuthService,
    CurrentUserInterceptor,{
      provide: APP_INTERCEPTOR,
      useClass:ReqHeaderParserInterceptor
    }
  ]
})
export class UserModule {}
