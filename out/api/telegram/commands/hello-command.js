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
class HelloCommand extends command_base_1.default {
    isMatch(commandInfo) {
        return commandInfo.command === "/hello";
    }
    execute(command, bot) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield bot.sendMessage(command.chatId, `Hello ${command.username}`, {
                reply_to_message_id: command.messageId
            });
        });
    }
}
exports.default = new HelloCommand();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVsbG8tY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvdGVsZWdyYW0vY29tbWFuZHMvaGVsbG8tY29tbWFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0Esa0VBQWlEO0FBR2pELGtCQUFtQixTQUFRLHNCQUFtQjtJQUNuQyxPQUFPLENBQUMsV0FBd0I7UUFDbkMsT0FBTyxXQUFXLENBQUMsT0FBTyxLQUFLLFFBQVEsQ0FBQztJQUM1QyxDQUFDO0lBRVksT0FBTyxDQUFDLE9BQW9CLEVBQUUsR0FBZ0I7O1lBQ3ZELE9BQU8sTUFBTSxHQUFHLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsU0FBUyxPQUFPLENBQUMsUUFBUSxFQUFFLEVBQUU7Z0JBQ3RFLG1CQUFtQixFQUFFLE9BQU8sQ0FBQyxTQUFTO2FBQ3pDLENBQUMsQ0FBQTtRQUNOLENBQUM7S0FBQTtDQUNKO0FBRUQsa0JBQWUsSUFBSSxZQUFZLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUZWxlZ3JhbUJvdCBmcm9tIFwibm9kZS10ZWxlZ3JhbS1ib3QtYXBpXCI7XHJcbmltcG9ydCBUZWxlZ3JhbUNvbW1hbmRCYXNlIGZyb20gXCIuL2NvbW1hbmQtYmFzZVwiO1xyXG5pbXBvcnQgeyBDb21tYW5kSW5mbyB9IGZyb20gXCIuL2NvbW1hbmQtaW5mb1wiO1xyXG5cclxuY2xhc3MgSGVsbG9Db21tYW5kIGV4dGVuZHMgVGVsZWdyYW1Db21tYW5kQmFzZSB7XHJcbiAgICBwdWJsaWMgaXNNYXRjaChjb21tYW5kSW5mbzogQ29tbWFuZEluZm8pOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gY29tbWFuZEluZm8uY29tbWFuZCA9PT0gXCIvaGVsbG9cIjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgZXhlY3V0ZShjb21tYW5kOiBDb21tYW5kSW5mbywgYm90OiBUZWxlZ3JhbUJvdCk6IFByb21pc2U8VGVsZWdyYW1Cb3QuTWVzc2FnZSB8IEVycm9yPiB7XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IGJvdC5zZW5kTWVzc2FnZShjb21tYW5kLmNoYXRJZCwgYEhlbGxvICR7Y29tbWFuZC51c2VybmFtZX1gLCB7XHJcbiAgICAgICAgICAgIHJlcGx5X3RvX21lc3NhZ2VfaWQ6IGNvbW1hbmQubWVzc2FnZUlkXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IEhlbGxvQ29tbWFuZCgpOyJdfQ==