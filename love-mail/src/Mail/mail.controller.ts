import { Controller, Get } from '@nestjs/common'

import { MailService } from "./mail.service";

import { ApiService } from "./../Api/api.service";

@Controller('mail')
export class MailController {
    constructor(private readonly mailService: MailService, private readonly apiservice: ApiService) {}

    @Get('')
    sendMail() {
        this.mailService.sendEmail();
        return 'ok'
    }

    @Get('/weather')
    async getWeather () {
        const Weather = await this.apiservice.getWeather()
        const SayLove = await this.apiservice.getSayLove()
        const DayLucky = await this.apiservice.getDayLucky()
        const getBing = await this.apiservice.getBing()

        console.log(getBing)
    }
}