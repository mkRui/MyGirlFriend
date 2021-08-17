import { Module } from '@nestjs/common';

import { ScheduleModule } from '@nestjs/schedule';

import { TasksService } from './tasks.service';
import { ApiModule } from '../Api/api.module';
import { MailModule } from '../Mail/mail.module';
@Module({
  imports: [ScheduleModule.forRoot(), ApiModule, MailModule],
  providers: [TasksService],
  exports: [TasksService],
})
export class TasksModule {}
