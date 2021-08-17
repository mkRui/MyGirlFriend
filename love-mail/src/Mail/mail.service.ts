import { Injectable } from '@nestjs/common';

import { MailerService } from '@nestjs-modules/mailer';

import * as dayjs from 'dayjs';

import Config from 'love-mail/email.config';
@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  /**
   *
   */
  sendEmail(url: string, content: string) {
    // 876481853@qq.com
    this.mailerService.sendMail({
      to: Config.to,
      from: Config.form,
      subject: Config.subTitle,
      template: 'mail',
      context: {
        url: url,
        time: dayjs().diff(dayjs(Config.date), 'day'),
        content: content,
      },
    });
  }
}
