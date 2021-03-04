import { Injectable } from "@nestjs/common";

import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
    constructor(private readonly mailerService: MailerService) {}

    sendEmail () {
        // 876481853@qq.com
        this.mailerService.sendMail({
            to: 'scrscript@163.com', // 接收信息的邮箱
            from: '1102163949@qq.com', // 要发送邮件的邮箱
            subject: 'Love You √',
            // html: '<b>welcome !</b>',
            template: 'mail',
            context: {  // Data to be sent to template engine.
                "code": 'cf1a3f828287',
                "username": 'john doe',
            },
        })
    }


}