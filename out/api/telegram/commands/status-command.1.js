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
class StatusCommand extends command_base_1.default {
    isMatch(msg) {
        return msg.text === "/status";
    }
    execute(bot, msg) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield bot.sendMessage(msg.chat.id, "OK", {
                reply_to_message_id: msg.message_id
            });
        });
    }
}
exports.default = new StatusCommand();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHVzLWNvbW1hbmQuMS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvdGVsZWdyYW0vY29tbWFuZHMvc3RhdHVzLWNvbW1hbmQuMS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0Esa0VBQWlEO0FBRWpELG1CQUFvQixTQUFRLHNCQUFtQjtJQUNwQyxPQUFPLENBQUMsR0FBd0I7UUFDbkMsT0FBTyxHQUFHLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQztJQUNsQyxDQUFDO0lBRVksT0FBTyxDQUFDLEdBQWdCLEVBQUUsR0FBd0I7O1lBQzNELE9BQU8sTUFBTSxHQUFHLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRTtnQkFDNUMsbUJBQW1CLEVBQUUsR0FBRyxDQUFDLFVBQVU7YUFDdEMsQ0FBQyxDQUFBO1FBQ04sQ0FBQztLQUFBO0NBQ0o7QUFFRCxrQkFBZSxJQUFJLGFBQWEsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRlbGVncmFtQm90IGZyb20gXCJub2RlLXRlbGVncmFtLWJvdC1hcGlcIjtcclxuaW1wb3J0IFRlbGVncmFtQ29tbWFuZEJhc2UgZnJvbSBcIi4vY29tbWFuZC1iYXNlXCI7XHJcblxyXG5jbGFzcyBTdGF0dXNDb21tYW5kIGV4dGVuZHMgVGVsZWdyYW1Db21tYW5kQmFzZSB7XHJcbiAgICBwdWJsaWMgaXNNYXRjaChtc2c6IFRlbGVncmFtQm90Lk1lc3NhZ2UpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gbXNnLnRleHQgPT09IFwiL3N0YXR1c1wiO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBleGVjdXRlKGJvdDogVGVsZWdyYW1Cb3QsIG1zZzogVGVsZWdyYW1Cb3QuTWVzc2FnZSk6IFByb21pc2U8VGVsZWdyYW1Cb3QuTWVzc2FnZSB8IEVycm9yPiB7XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IGJvdC5zZW5kTWVzc2FnZShtc2cuY2hhdC5pZCwgXCJPS1wiLCB7XHJcbiAgICAgICAgICAgIHJlcGx5X3RvX21lc3NhZ2VfaWQ6IG1zZy5tZXNzYWdlX2lkXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IFN0YXR1c0NvbW1hbmQoKTsiXX0=