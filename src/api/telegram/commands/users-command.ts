import AUTHORIZED_USERS from "../authorized-users";
import TelegramBot from "node-telegram-bot-api";
import TelegramCommandBase from "./command-base";
import { CommandInfo } from "./command-info";

class UsersCommand extends TelegramCommandBase {
    public isMatch(commandInfo: CommandInfo): boolean {
        return commandInfo.command === "/users";
    }

    public async execute(command: CommandInfo, bot: TelegramBot): Promise<TelegramBot.Message | Error> {
        if (!command || command.command !== "/users") throw new Error("Invalid command");

        let option = command.option || "show";

        switch (option) {
            case "show": return await this.show(bot, command);
            case "add": return await this.add(bot, command);
            case "remove": return await this.remove(bot, command);
            default: return bot.sendMessage(command.chatId, `Sorry, I don't know how to <b>${command.option}</b> users`, {
                reply_to_message_id: command.messageId,
                parse_mode: "HTML"
            });
        }
    }

    private async show(bot: TelegramBot, command: CommandInfo): Promise<TelegramBot.Message | Error> {
        let users = Object.keys(AUTHORIZED_USERS).filter(k => AUTHORIZED_USERS[k]).reduce((prv, cur, idx, all) => `${prv}\r\n${cur}`, "");
        return await bot.sendMessage(command.chatId, users, {
            reply_to_message_id: command.messageId
        });
    }

    private async add(bot: TelegramBot, command: CommandInfo): Promise<TelegramBot.Message | Error> {
        if (!command.args) {
            return await bot.sendMessage(command.chatId, "Please provide a list of space separated users", {
                reply_to_message_id: command.messageId
            });
        }

        command.args.forEach(user => AUTHORIZED_USERS[user] = true);
        return this.show(bot, command);
    }

    private async remove(bot: TelegramBot, command: CommandInfo): Promise<TelegramBot.Message | Error> {
        if (!command.args) {
            return await bot.sendMessage(command.chatId, "Please provide a list of space separated users", {
                reply_to_message_id: command.messageId
            });
        }

        command.args.forEach(user => AUTHORIZED_USERS[user] = false);
        return this.show(bot, command);
    }
}

export default new UsersCommand();