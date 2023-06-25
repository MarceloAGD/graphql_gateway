import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  setTimeout(function(){
    app.listen(4000);
  }, 10000)
  
}
bootstrap();
