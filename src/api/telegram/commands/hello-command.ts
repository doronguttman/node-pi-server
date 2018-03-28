import TelegramBot from "node-telegram-bot-api";
import TelegramCommandBase from "./command-base";

class HelloCommand extends TelegramCommandBase {
    public isMatch(msg: TelegramBot.Message): boolean {
        return msg.text === "/hello";
    }

    public async execute(bot: TelegramBot, msg: TelegramBot.Message): Promise<TelegramBot.Message | Error> {
        return await bot.sendMessage(msg.chat.id, `Hello ${msg.chat.username}`, {
            reply_to_message_id: msg.message_id
        })
    }
}

export default new HelloCommand();