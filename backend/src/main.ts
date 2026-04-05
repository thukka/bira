import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParserMiddleware from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const cookieParser = cookieParserMiddleware.default;

  app.use(cookieParser());
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
