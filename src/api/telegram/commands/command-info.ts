import TelegramBot from "node-telegram-bot-api";
import AUTHORIZED_USERS from "../authorized-users";
const PARSER = /^((\/\w+)((\s+)(\w+)((\s+)(.*))?)?)/;

function parse(text: string | undefined): { command: string, option?: string, args?: string[] } | null {
    if (!text || text.trim().length === 0) return null;
    let matches = PARSER.exec(text);
    if (!matches) return null;
    return {
        command: matches[2],
        option: matches[5] || undefined,
        args: matches[8] && matches[8].trim().split(" ") || undefined
    };
}

export class CommandInfo {
    private readonly _data: { command: string, option?: string, args?: string[] } | null;
    constructor(public readonly message: TelegramBot.Message) {
        this._data = parse(message.text);
    }

    public get command(): string | null {
        return this._data && this._data.command || null;
    }

    public get option(): string | null {
        return this._data && this._data.option || null;
    }

    public get args(): string[] | null {
        return this._data && this._data.args || null;
    }

    public get chatId(): number {
        return this.message.chat.id;
    }

    public get messageId(): number {
        return this.message.message_id;
    }

    public get username(): string | undefined {
        return this.message.chat.username || (this.message.from && this.message.from.username);
    }

    public get isAuthorized() : boolean {
        return !!this.username && AUTHORIZED_USERS[this.username];
    }
}