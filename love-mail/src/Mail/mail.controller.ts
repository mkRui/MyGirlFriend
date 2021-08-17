import { Controller, Get } from '@nestjs/common';

import { MailService } from './mail.service';

import { ApiService } from '../Api/api.service';

import * as fs from 'fs';

@Controller('mail')
export class MailController {
  constructor(
    private readonly mailService: MailService,
    private readonly apiService: ApiService,
  ) {}

  // @Get('')
  // sendMail() {
  //   this.mailService.sendEmail();
  //   return 'ok';
  // }

  @Get('/weather')
  async getWeather() {
    // const Weather = await this.apiservice.getWeather();
    const SayLove = await this.apiService.getSayLove();
    // const DayLucky = await this.apiservice.getDayLucky();
    await this.apiService.getBing();

    setTimeout(() => {
      const url = fs.readFileSync('./img.md', 'utf8');
      this.mailService.sendEmail(url, SayLove.newslist[0].content);
    }, 3000);
  }

}
