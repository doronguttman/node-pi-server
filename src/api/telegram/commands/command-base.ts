import TelegramBot from "node-telegram-bot-api";

export default abstract class TelegramCommandBase {
    public abstract isMatch(msg: TelegramBot.Message): boolean;
    public abstract async execute(bot: TelegramBot, msg: TelegramBot.Message): Promise<TelegramBot.Message | Error>;
}