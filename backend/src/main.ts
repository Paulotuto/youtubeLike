import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Autoriser ton frontend Vue
  app.enableCors({
    origin: 'http://localhost:5173', // port de Vue
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
