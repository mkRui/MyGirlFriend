import { Injectable } from "@nestjs/common";

import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
    constructor(private readonly mailerService: MailerService) {}

    sendEmail () {
        this.mailerService.sendMail({
            to: '876481853@qq.com', // 接收信息的邮箱
            from: '1102163949@qq.com', // 要发送邮件的邮箱
            subject: 'Love You √',
            // html: '<b>welcome !</b>',
            template: 'mail',
        })
    }


}