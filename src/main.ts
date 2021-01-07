import { NestFactory } from '@nestjs/core';
import { NestExpressApplication, ExpressAdapter } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import * as express from 'express'

async function bootstrap() {
  const server = express();
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    new ExpressAdapter(server),
  );
  app.useStaticAssets(join(__dirname, '..', 'public'));
  
  const port = 8080;
  await app.listen(port, () => { console.log(`Listening port: ${port} `) });
}
bootstrap();
