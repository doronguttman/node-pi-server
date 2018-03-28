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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVsbG8tY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvdGVsZWdyYW0vY29tbWFuZHMvaGVsbG8tY29tbWFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0Esa0VBQWlEO0FBRWpELGtCQUFtQixTQUFRLHNCQUFtQjtJQUNuQyxPQUFPLENBQUMsR0FBd0I7UUFDbkMsT0FBTyxHQUFHLENBQUMsSUFBSSxLQUFLLFFBQVEsQ0FBQztJQUNqQyxDQUFDO0lBRVksT0FBTyxDQUFDLEdBQWdCLEVBQUUsR0FBd0I7O1lBQzNELE9BQU8sTUFBTSxHQUFHLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRTtnQkFDcEUsbUJBQW1CLEVBQUUsR0FBRyxDQUFDLFVBQVU7YUFDdEMsQ0FBQyxDQUFBO1FBQ04sQ0FBQztLQUFBO0NBQ0o7QUFFRCxrQkFBZSxJQUFJLFlBQVksRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRlbGVncmFtQm90IGZyb20gXCJub2RlLXRlbGVncmFtLWJvdC1hcGlcIjtcclxuaW1wb3J0IFRlbGVncmFtQ29tbWFuZEJhc2UgZnJvbSBcIi4vY29tbWFuZC1iYXNlXCI7XHJcblxyXG5jbGFzcyBIZWxsb0NvbW1hbmQgZXh0ZW5kcyBUZWxlZ3JhbUNvbW1hbmRCYXNlIHtcclxuICAgIHB1YmxpYyBpc01hdGNoKG1zZzogVGVsZWdyYW1Cb3QuTWVzc2FnZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBtc2cudGV4dCA9PT0gXCIvaGVsbG9cIjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgZXhlY3V0ZShib3Q6IFRlbGVncmFtQm90LCBtc2c6IFRlbGVncmFtQm90Lk1lc3NhZ2UpOiBQcm9taXNlPFRlbGVncmFtQm90Lk1lc3NhZ2UgfCBFcnJvcj4ge1xyXG4gICAgICAgIHJldHVybiBhd2FpdCBib3Quc2VuZE1lc3NhZ2UobXNnLmNoYXQuaWQsIGBIZWxsbyAke21zZy5jaGF0LnVzZXJuYW1lfWAsIHtcclxuICAgICAgICAgICAgcmVwbHlfdG9fbWVzc2FnZV9pZDogbXNnLm1lc3NhZ2VfaWRcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgSGVsbG9Db21tYW5kKCk7Il19