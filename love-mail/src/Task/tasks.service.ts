import { Injectable, Logger } from '@nestjs/common';

import { Cron, Interval, Timeout } from '@nestjs/schedule';

@Injectable()
export class TasksService {


    private readonly logger = new Logger(TasksService.name);

    // constructor(private readonly) {}


    // @Interval(1000)
    // handleIntervaldd() {
    //     this.logger.debug('2');
    // }

    @Cron('0 0 8 * * 1-7')
    handleInterval() {
        this.logger.debug('2');
    }
}