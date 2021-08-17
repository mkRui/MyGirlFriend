import { Module } from '@nestjs/common';

import { MailerModule } from '@nestjs-modules/mailer';

import { EjsAdapter } from '@nestjs-modules/mailer/dist/adapters/ejs.adapter';

import { MailController } from './mail.controller';

import { MailService } from './mail.service';

import { ApiModule } from './../Api/api.module';

import Config from 'love-mail/email.config';
@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.qq.com',
        secureConnection: true,
        port: 465,
        sercure: true,
        auth: {
          user: Config.form,
          pass: Config.key,
        },
      },
      defaults: {
        from: Config.subTitle,
      },
      template: {
        dir: process.cwd() + '/src/Template/',
        adapter: new EjsAdapter(),
        options: {
          strict: false,
        },
      },
    }),
    ApiModule,
  ],
  controllers: [MailController],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
