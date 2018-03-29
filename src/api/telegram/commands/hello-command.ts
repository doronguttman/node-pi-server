import TelegramBot from "node-telegram-bot-api";
import TelegramCommandBase from "./command-base";
import { CommandInfo } from "./command-info";

class HelloCommand extends TelegramCommandBase {
    public isMatch(commandInfo: CommandInfo): boolean {
        return commandInfo.command === "/hello";
    }

    public async execute(command: CommandInfo, bot: TelegramBot): Promise<TelegramBot.Message | Error> {
        return await bot.sendMessage(command.chatId, `Hello ${command.username}`, {
            reply_to_message_id: command.messageId
        })
    }
}

export default new HelloCommand();