import { Module } from '@nestjs/common';

import { AppController } from './app.controller';

import { AppService } from './app.service';

import { TasksModule } from '../Task/tasks.module';

import { MailModule } from './../Mail';

@Module({
  imports: [MailModule, TasksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
