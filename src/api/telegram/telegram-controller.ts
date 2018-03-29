import { Express, Request, Response, NextFunction } from "express";
import AUTHORIZED_USERS from "./authorized-users";
import TelegramBot from "node-telegram-bot-api";
import commands from "./commands/index";
import { CommandInfo } from "./commands/command-info";

const TOKEN = "579172390:AAF_R_w38DbUZ4fX0uRbz1WTHd0bJRTtn4g";

export class TelegramController {
    private readonly _bot: TelegramBot;

    constructor(express: Express) {
        this._bot = new TelegramBot(TOKEN, {
            polling: true,
        });
        this._bot.on("polling_error", (error) => this.handlePollingError(error));
        this._bot.on("message", (msg: TelegramBot.Message) => this.handleMessage(msg));

        express.get("/api/telegram", (req, res, next) => this.getBotStatus(req, res, next));
    }

    private getBotStatus(req: Request, res: Response, next: NextFunction): void {
        this._bot.getMe()
            .then(me => {
                res.status(200).json({
                    me: me,
                    isPolling: this._bot.isPolling
                });
            })
            .catch(err => next(err));
    }

    private handlePollingError(err: Error): void {
        console.error(`${new Date().toISOString()} ERR ${TelegramController.name}.${this.handlePollingError.name}`, err);  // => 'EFATAL'
    }

    private async handleMessage(msg: TelegramBot.Message): Promise<void> {
        console.log(`${new Date().toISOString()} ${TelegramController.name}.${this.handleMessage.name}`, msg);
        try {
            let commandInfo = new CommandInfo(msg);
            let command = commands.find(c => c.isMatch(commandInfo));
            if (command && command.authorizationRequired) this.throwNotAuthorized(msg);
            if (command) {
                let rslt = await command.execute(commandInfo, this._bot)
                if (rslt instanceof Error) {
                    throw rslt;
                } else {
                    console.log(`${new Date().toISOString()} ${TelegramController.name}.${this.handleMessage.name}`, rslt);
                }
            } else {
                this._bot.sendMessage(msg.chat.id, "Huh?!?", {
                    reply_to_message_id: msg.message_id
                });
            }
        } catch (e) {
            console.error(`${new Date().toISOString()} ${TelegramController.name}.${this.handleMessage.name}`, e.stack && e.stack || e);
        }
    }

    private throwNotAuthorized(msg: TelegramBot.Message): void {
        let user = msg.from && msg.from.username;
        if (!user || !AUTHORIZED_USERS[user]) {
            throw new Error("Unauthorized user");
        }
    }
}
