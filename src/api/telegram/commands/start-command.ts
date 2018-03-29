import TelegramBot from "node-telegram-bot-api";
import TelegramCommandBase from "./command-base";
import { CommandInfo } from "./command-info";

class StartCommand extends TelegramCommandBase {
    public authorizationRequired = false;

    public isMatch(commandInfo: CommandInfo): boolean {
        return commandInfo.command === "/start";
    }

    public async execute(command: CommandInfo, bot: TelegramBot): Promise<TelegramBot.Message | Error> {
        let message;
        if (command.isAuthorized) {
            message = `Hello ${command.username}`;
        } else {
            message = `You are not authorized to use this bot, bye bye!`;
            setTimeout(() => bot.leaveChat(command.chatId), 2000);
        }
            
        return await bot.sendMessage(command.chatId, message, {
            reply_to_message_id: command.messageId
        })
    }
}

export default new StartCommand();