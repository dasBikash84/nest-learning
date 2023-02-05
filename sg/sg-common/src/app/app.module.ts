import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AmsterdamModule } from 'src/amsterdam/amsterdam.module';
import { mongoCon } from 'src/db/mongodb.typeorm';
import { UserModule } from 'src/user/user.module';

@Module({
  imports:[
    mongoCon,
    AmsterdamModule,
    UserModule,
    ConfigModule.forRoot()
  ]})
export class AppModule {}
