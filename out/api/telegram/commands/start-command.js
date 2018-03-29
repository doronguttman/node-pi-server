"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const command_base_1 = __importDefault(require("./command-base"));
class StartCommand extends command_base_1.default {
    constructor() {
        super(...arguments);
        this.authorizationRequired = false;
    }
    isMatch(commandInfo) {
        return commandInfo.command === "/start";
    }
    execute(command, bot) {
        return __awaiter(this, void 0, void 0, function* () {
            let message;
            if (command.isAuthorized) {
                message = `Hello ${command.username}`;
            }
            else {
                message = `You are not authorized to use this bot, bye bye!`;
                setTimeout(() => bot.leaveChat(command.chatId), 2000);
            }
            return yield bot.sendMessage(command.chatId, message, {
                reply_to_message_id: command.messageId
            });
        });
    }
}
exports.default = new StartCommand();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnQtY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvdGVsZWdyYW0vY29tbWFuZHMvc3RhcnQtY29tbWFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0Esa0VBQWlEO0FBR2pELGtCQUFtQixTQUFRLHNCQUFtQjtJQUE5Qzs7UUFDVywwQkFBcUIsR0FBRyxLQUFLLENBQUM7SUFtQnpDLENBQUM7SUFqQlUsT0FBTyxDQUFDLFdBQXdCO1FBQ25DLE9BQU8sV0FBVyxDQUFDLE9BQU8sS0FBSyxRQUFRLENBQUM7SUFDNUMsQ0FBQztJQUVZLE9BQU8sQ0FBQyxPQUFvQixFQUFFLEdBQWdCOztZQUN2RCxJQUFJLE9BQU8sQ0FBQztZQUNaLElBQUksT0FBTyxDQUFDLFlBQVksRUFBRTtnQkFDdEIsT0FBTyxHQUFHLFNBQVMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ3pDO2lCQUFNO2dCQUNILE9BQU8sR0FBRyxrREFBa0QsQ0FBQztnQkFDN0QsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ3pEO1lBRUQsT0FBTyxNQUFNLEdBQUcsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUU7Z0JBQ2xELG1CQUFtQixFQUFFLE9BQU8sQ0FBQyxTQUFTO2FBQ3pDLENBQUMsQ0FBQTtRQUNOLENBQUM7S0FBQTtDQUNKO0FBRUQsa0JBQWUsSUFBSSxZQUFZLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUZWxlZ3JhbUJvdCBmcm9tIFwibm9kZS10ZWxlZ3JhbS1ib3QtYXBpXCI7XHJcbmltcG9ydCBUZWxlZ3JhbUNvbW1hbmRCYXNlIGZyb20gXCIuL2NvbW1hbmQtYmFzZVwiO1xyXG5pbXBvcnQgeyBDb21tYW5kSW5mbyB9IGZyb20gXCIuL2NvbW1hbmQtaW5mb1wiO1xyXG5cclxuY2xhc3MgU3RhcnRDb21tYW5kIGV4dGVuZHMgVGVsZWdyYW1Db21tYW5kQmFzZSB7XHJcbiAgICBwdWJsaWMgYXV0aG9yaXphdGlvblJlcXVpcmVkID0gZmFsc2U7XHJcblxyXG4gICAgcHVibGljIGlzTWF0Y2goY29tbWFuZEluZm86IENvbW1hbmRJbmZvKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIGNvbW1hbmRJbmZvLmNvbW1hbmQgPT09IFwiL3N0YXJ0XCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGV4ZWN1dGUoY29tbWFuZDogQ29tbWFuZEluZm8sIGJvdDogVGVsZWdyYW1Cb3QpOiBQcm9taXNlPFRlbGVncmFtQm90Lk1lc3NhZ2UgfCBFcnJvcj4ge1xyXG4gICAgICAgIGxldCBtZXNzYWdlO1xyXG4gICAgICAgIGlmIChjb21tYW5kLmlzQXV0aG9yaXplZCkge1xyXG4gICAgICAgICAgICBtZXNzYWdlID0gYEhlbGxvICR7Y29tbWFuZC51c2VybmFtZX1gO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgWW91IGFyZSBub3QgYXV0aG9yaXplZCB0byB1c2UgdGhpcyBib3QsIGJ5ZSBieWUhYDtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBib3QubGVhdmVDaGF0KGNvbW1hbmQuY2hhdElkKSwgMjAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICByZXR1cm4gYXdhaXQgYm90LnNlbmRNZXNzYWdlKGNvbW1hbmQuY2hhdElkLCBtZXNzYWdlLCB7XHJcbiAgICAgICAgICAgIHJlcGx5X3RvX21lc3NhZ2VfaWQ6IGNvbW1hbmQubWVzc2FnZUlkXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IFN0YXJ0Q29tbWFuZCgpOyJdfQ==