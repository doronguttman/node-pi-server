import TelegramCommandBase from "./command-base";
import doorCommand from "./door-command";
import helloCommand from "./hello-command";
import usersCommand from "./users-command";

const commands: TelegramCommandBase[] = [
    doorCommand,
    helloCommand,
    usersCommand
];

export default commands;