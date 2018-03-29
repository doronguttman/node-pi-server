import TelegramBot from "node-telegram-bot-api";
import { CommandInfo } from "./command-info";

export default abstract class TelegramCommandBase {
    public authorizationRequired = true;
    public abstract isMatch(commandInfo: CommandInfo): boolean;
    public abstract async execute(command: CommandInfo, bot: TelegramBot): Promise<TelegramBot.Message | Error>;
}