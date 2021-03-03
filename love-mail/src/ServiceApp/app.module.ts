import { Module } from '@nestjs/common';

import { AppController } from './app.controller';

import { AppService } from './app.service';

import { MailerModule } from '@nestjs-modules/mailer'

import { EjsAdapter } from '@nestjs-modules/mailer/dist/adapters/ejs.adapter'

import { MailModule } from './../Mail'

@Module({
  imports: [
      MailerModule.forRoot({
          transport: {
            host: 'smtp.qq.com',
            secureConnection: true,
            port: 465,
            sercure: true,
            auth: {
            }
          },
          defaults:  {
              from: '"Rui(瑞)"<1102163949@qq.com>'
          },
          template: {
              dir: process.cwd() + '/src/Template/',
              adapter: new EjsAdapter(),
              options: {
                strict: true
            }
          }
      }),
      MailModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
