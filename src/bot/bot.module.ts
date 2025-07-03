import { Module } from '@nestjs/common';
import { BotService } from './bot.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { BotUpdate } from './bot.update';

@Module({
  imports: [SequelizeModule.forFeature([])],
  controllers: [],
  providers: [BotUpdate, BotService],
})
export class BotModule { }
