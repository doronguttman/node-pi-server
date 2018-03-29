import TelegramBot from "node-telegram-bot-api";
import TelegramCommandBase from "./command-base";
import { CommandInfo } from "./command-info";
// import { GpioManager } from "../../gpio-controller"

let _doorStatus = true;
class DoorCommand extends TelegramCommandBase {
    public isMatch(commandInfo: CommandInfo): boolean {
        return commandInfo.command === "/door";
    }

    public async execute(command: CommandInfo, bot: TelegramBot): Promise<TelegramBot.Message | Error> {
        // let doorStatus = await GpioManager.read(4) === 0;
        let doorStatus = _doorStatus;
        return await bot.sendMessage(command.chatId, `Door is <b>${doorStatus ? "closed" : "open"}</b>`, {
            reply_to_message_id: command.messageId,
            parse_mode: "HTML",
            reply_markup: {
                keyboard: [[{
                    text: `/door ${doorStatus ? "open" : "close"}`
                }]],
                one_time_keyboard: true
            }
        })
    }
}

export default new DoorCommand();