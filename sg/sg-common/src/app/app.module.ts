import { Module } from '@nestjs/common';
import { AmsterdamModule } from 'src/amsterdam/amsterdam.module';
import { mongoCon } from 'src/db/mongodb.typeorm';
import { UserModule } from 'src/user/user.module';

@Module({
  imports:[
    mongoCon,
    AmsterdamModule,
    UserModule
  ]})
export class AppModule {}
