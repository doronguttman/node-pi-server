import TelegramBot from "node-telegram-bot-api";
import TelegramCommandBase from "./command-base";
// import { GpioManager } from "../../gpio-controller"

let _doorStatus = true;
class DoorCommand extends TelegramCommandBase {
    public isMatch(msg: TelegramBot.Message): boolean {
        return msg.text === "/door";
    }

    public async execute(bot: TelegramBot, msg: TelegramBot.Message): Promise<TelegramBot.Message | Error> {
        // let doorStatus = await GpioManager.read(4) === 0;
        let doorStatus = _doorStatus;
        return await bot.sendMessage(msg.chat.id, `Door is <b>${doorStatus ? "closed" : "open"}</b>`, {
            reply_to_message_id: msg.message_id,
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