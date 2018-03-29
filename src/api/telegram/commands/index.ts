import TelegramCommandBase from "./command-base";
import doorCommand from "./door-command";
import helloCommand from "./hello-command";
import usersCommand from "./users-command";
import startCommand from "./start-command";

const commands: TelegramCommandBase[] = [
    doorCommand,
    helloCommand,
    usersCommand,
    startCommand
];

export default commands;