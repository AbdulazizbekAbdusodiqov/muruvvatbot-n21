import { BotService } from './bot.service';
import { Ctx, Start, Update } from 'nestjs-telegraf';
import { Context } from "telegraf"

@Update()
export class BotUpdate {
  constructor(private readonly botService: BotService) { }
  @Start()
  async onStart(@Ctx() ctx: Context) {
    try {
      
    } catch (error) {
      console.log("Error on Start", error);
    }
  }
}
