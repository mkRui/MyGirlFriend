import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './ServiceApp/app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );

  console.log()

  app.useStaticAssets(join(__dirname,'../src','Public'));

  app.setBaseViewsDir(join(__dirname,'../src','Template'));

  app.setViewEngine('ejs')

  // !默认在根目录下
  //   app.useStaticAssets('public');

  await app.listen(3000);
}
bootstrap();
