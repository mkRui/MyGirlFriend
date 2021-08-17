import { Injectable, Logger } from '@nestjs/common';

import { Cron, Interval, Timeout } from '@nestjs/schedule';

import * as fs from 'fs';

import { MailService } from '../Mail/mail.service';

import { ApiService } from './../Api/api.service';

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);

  constructor(
    private readonly mailService: MailService,
    private readonly apiService: ApiService,
  ) {}

  // constructor(private readonly) {}

  // @Interval(1000)
  // handleIntervaldd() {
  //     this.logger.debug('2');
  // }

  @Cron('0 0 8 * * 1-7')
  async handleInterval() {
    const SayLove = await this.apiService.getSayLove();
    await this.apiService.getBing();

    setTimeout(() => {
      const url = fs.readFileSync('./img.md', 'utf8');
      this.mailService.sendEmail(url, SayLove.newslist[0].content);
    }, 3000);
  }
}
