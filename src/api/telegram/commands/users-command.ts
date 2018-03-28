import AUTHORIZED_USERS from "../authorized-users";
import TelegramBot from "node-telegram-bot-api";
import TelegramCommandBase from "./command-base";
import {parseCommand} from "../utils";

class UsersCommand extends TelegramCommandBase {
    public isMatch(msg: TelegramBot.Message): boolean {
        return msg.text && msg.text.startsWith("/users") || false;
    }

    public async execute(bot: TelegramBot, msg: TelegramBot.Message): Promise<TelegramBot.Message | Error> {
        let command = parseCommand(msg.text);
        if (!command || command.command !== "/users") throw new Error("Invalid command");

        if (!command.option) command.option = "show";

        switch (command.option) {
            case "show": return await this.show(bot, msg);
            case "add": return await this.add(bot, msg, command.args);
            case "remove": return await this.remove(bot, msg, command.args);
            default: return bot.sendMessage(msg.chat.id, `Sorry, I don't know how to <b>${command.option}</b> users`, {
                reply_to_message_id: msg.message_id,
                parse_mode: "HTML"
            });
        }
    }

    private async show(bot: TelegramBot, msg: TelegramBot.Message): Promise<TelegramBot.Message | Error> {
        let users = Object.keys(AUTHORIZED_USERS).filter(k => AUTHORIZED_USERS[k]).reduce((prv, cur, idx, all) => `${prv}\r\n${cur}`, "");
        return await bot.sendMessage(msg.chat.id, users, {
            reply_to_message_id: msg.message_id
        });
    }

    private async add(bot: TelegramBot, msg: TelegramBot.Message, users: string[] | undefined): Promise<TelegramBot.Message | Error> {
        if (!users) {
            return await bot.sendMessage(msg.chat.id, "Please provide a list of space separated users", {
                reply_to_message_id: msg.message_id
            });
        }

        users.forEach(user => AUTHORIZED_USERS[user] = true);
        return this.show(bot, msg);
    }

    private async remove(bot: TelegramBot, msg: TelegramBot.Message, users: string[] | undefined): Promise<TelegramBot.Message | Error> {
        if (!users) {
            return await bot.sendMessage(msg.chat.id, "Please provide a list of space separated users", {
                reply_to_message_id: msg.message_id
            });
        }

        users.forEach(user => AUTHORIZED_USERS[user] = false);
        return this.show(bot, msg);
    }
}

export default new UsersCommand();