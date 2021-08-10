import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger();

  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ disableErrorMessages: false }));
  app.enableCors();
  app.setGlobalPrefix('api');

  const PORT: number = 5000;
  await app.listen(PORT);

  logger.log(`Application listening on port ${PORT}`);
}

bootstrap();
