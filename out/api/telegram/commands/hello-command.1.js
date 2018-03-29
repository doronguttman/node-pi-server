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
    isMatch(msg) {
        return msg.text === "/hello";
    }
    execute(bot, msg) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield bot.sendMessage(msg.chat.id, `Hello ${msg.chat.username}`, {
                reply_to_message_id: msg.message_id
            });
        });
    }
}
exports.default = new HelloCommand();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVsbG8tY29tbWFuZC4xLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FwaS90ZWxlZ3JhbS9jb21tYW5kcy9oZWxsby1jb21tYW5kLjEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLGtFQUFpRDtBQUVqRCxrQkFBbUIsU0FBUSxzQkFBbUI7SUFDbkMsT0FBTyxDQUFDLEdBQXdCO1FBQ25DLE9BQU8sR0FBRyxDQUFDLElBQUksS0FBSyxRQUFRLENBQUM7SUFDakMsQ0FBQztJQUVZLE9BQU8sQ0FBQyxHQUFnQixFQUFFLEdBQXdCOztZQUMzRCxPQUFPLE1BQU0sR0FBRyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUU7Z0JBQ3BFLG1CQUFtQixFQUFFLEdBQUcsQ0FBQyxVQUFVO2FBQ3RDLENBQUMsQ0FBQTtRQUNOLENBQUM7S0FBQTtDQUNKO0FBRUQsa0JBQWUsSUFBSSxZQUFZLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUZWxlZ3JhbUJvdCBmcm9tIFwibm9kZS10ZWxlZ3JhbS1ib3QtYXBpXCI7XHJcbmltcG9ydCBUZWxlZ3JhbUNvbW1hbmRCYXNlIGZyb20gXCIuL2NvbW1hbmQtYmFzZVwiO1xyXG5cclxuY2xhc3MgSGVsbG9Db21tYW5kIGV4dGVuZHMgVGVsZWdyYW1Db21tYW5kQmFzZSB7XHJcbiAgICBwdWJsaWMgaXNNYXRjaChtc2c6IFRlbGVncmFtQm90Lk1lc3NhZ2UpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gbXNnLnRleHQgPT09IFwiL2hlbGxvXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGV4ZWN1dGUoYm90OiBUZWxlZ3JhbUJvdCwgbXNnOiBUZWxlZ3JhbUJvdC5NZXNzYWdlKTogUHJvbWlzZTxUZWxlZ3JhbUJvdC5NZXNzYWdlIHwgRXJyb3I+IHtcclxuICAgICAgICByZXR1cm4gYXdhaXQgYm90LnNlbmRNZXNzYWdlKG1zZy5jaGF0LmlkLCBgSGVsbG8gJHttc2cuY2hhdC51c2VybmFtZX1gLCB7XHJcbiAgICAgICAgICAgIHJlcGx5X3RvX21lc3NhZ2VfaWQ6IG1zZy5tZXNzYWdlX2lkXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IEhlbGxvQ29tbWFuZCgpOyJdfQ==