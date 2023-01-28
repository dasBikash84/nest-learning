import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AmsterdamModule } from './amsterdam/amsterdam.module';

async function bootstrap() {
  const app = await NestFactory.create(AmsterdamModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3333);
}
bootstrap();
