import { Injectable } from "@nestjs/common";

import { MailerService } from '@nestjs-modules/mailer';

import moment from 'moment'

@Injectable()
export class MailService {
    constructor(private readonly mailerService: MailerService) {}


    /**
     * 
     */
    sendEmail () {
        // 876481853@qq.com
        this.mailerService.sendMail({
            to: 'scrscript@163.com', // 接收信息的邮箱
            from: '1102163949@qq.com', // 要发送邮件的邮箱
            subject: 'Love You √',
            // html: '<b>welcome !</b>',
            template: 'mail',
            context: {  // Data to be sent to template engine.
                "date": moment().format('YYYY-MM-DD'),
                "StartTime": '2021-02-11',
                "username": 'john doe',
            },
        })
    }


}