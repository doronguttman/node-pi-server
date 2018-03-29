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
const authorized_users_1 = __importDefault(require("../authorized-users"));
const command_base_1 = __importDefault(require("./command-base"));
class UsersCommand extends command_base_1.default {
    isMatch(commandInfo) {
        return commandInfo.command === "/users";
    }
    execute(command, bot) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!command || command.command !== "/users")
                throw new Error("Invalid command");
            let option = command.option || "show";
            switch (option) {
                case "show": return yield this.show(bot, command);
                case "add": return yield this.add(bot, command);
                case "remove": return yield this.remove(bot, command);
                default: return bot.sendMessage(command.chatId, `Sorry, I don't know how to <b>${command.option}</b> users`, {
                    reply_to_message_id: command.messageId,
                    parse_mode: "HTML"
                });
            }
        });
    }
    show(bot, command) {
        return __awaiter(this, void 0, void 0, function* () {
            let users = Object.keys(authorized_users_1.default).filter(k => authorized_users_1.default[k]).reduce((prv, cur, idx, all) => `${prv}\r\n${cur}`, "");
            return yield bot.sendMessage(command.chatId, users, {
                reply_to_message_id: command.messageId
            });
        });
    }
    add(bot, command) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!command.args) {
                return yield bot.sendMessage(command.chatId, "Please provide a list of space separated users", {
                    reply_to_message_id: command.messageId
                });
            }
            command.args.forEach(user => authorized_users_1.default[user] = true);
            return this.show(bot, command);
        });
    }
    remove(bot, command) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!command.args) {
                return yield bot.sendMessage(command.chatId, "Please provide a list of space separated users", {
                    reply_to_message_id: command.messageId
                });
            }
            command.args.forEach(user => authorized_users_1.default[user] = false);
            return this.show(bot, command);
        });
    }
}
exports.default = new UsersCommand();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMtY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvdGVsZWdyYW0vY29tbWFuZHMvdXNlcnMtY29tbWFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsMkVBQW1EO0FBRW5ELGtFQUFpRDtBQUdqRCxrQkFBbUIsU0FBUSxzQkFBbUI7SUFDbkMsT0FBTyxDQUFDLFdBQXdCO1FBQ25DLE9BQU8sV0FBVyxDQUFDLE9BQU8sS0FBSyxRQUFRLENBQUM7SUFDNUMsQ0FBQztJQUVZLE9BQU8sQ0FBQyxPQUFvQixFQUFFLEdBQWdCOztZQUN2RCxJQUFJLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxPQUFPLEtBQUssUUFBUTtnQkFBRSxNQUFNLElBQUksS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFFakYsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUM7WUFFdEMsUUFBUSxNQUFNLEVBQUU7Z0JBQ1osS0FBSyxNQUFNLENBQUMsQ0FBQyxPQUFPLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBQ2xELEtBQUssS0FBSyxDQUFDLENBQUMsT0FBTyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUNoRCxLQUFLLFFBQVEsQ0FBQyxDQUFDLE9BQU8sTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFDdEQsT0FBTyxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsaUNBQWlDLE9BQU8sQ0FBQyxNQUFNLFlBQVksRUFBRTtvQkFDekcsbUJBQW1CLEVBQUUsT0FBTyxDQUFDLFNBQVM7b0JBQ3RDLFVBQVUsRUFBRSxNQUFNO2lCQUNyQixDQUFDLENBQUM7YUFDTjtRQUNMLENBQUM7S0FBQTtJQUVhLElBQUksQ0FBQyxHQUFnQixFQUFFLE9BQW9COztZQUNyRCxJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLDBCQUFnQixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsMEJBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsR0FBRyxPQUFPLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ2xJLE9BQU8sTUFBTSxHQUFHLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFO2dCQUNoRCxtQkFBbUIsRUFBRSxPQUFPLENBQUMsU0FBUzthQUN6QyxDQUFDLENBQUM7UUFDUCxDQUFDO0tBQUE7SUFFYSxHQUFHLENBQUMsR0FBZ0IsRUFBRSxPQUFvQjs7WUFDcEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUU7Z0JBQ2YsT0FBTyxNQUFNLEdBQUcsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxnREFBZ0QsRUFBRTtvQkFDM0YsbUJBQW1CLEVBQUUsT0FBTyxDQUFDLFNBQVM7aUJBQ3pDLENBQUMsQ0FBQzthQUNOO1lBRUQsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQywwQkFBZ0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztZQUM1RCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ25DLENBQUM7S0FBQTtJQUVhLE1BQU0sQ0FBQyxHQUFnQixFQUFFLE9BQW9COztZQUN2RCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRTtnQkFDZixPQUFPLE1BQU0sR0FBRyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLGdEQUFnRCxFQUFFO29CQUMzRixtQkFBbUIsRUFBRSxPQUFPLENBQUMsU0FBUztpQkFDekMsQ0FBQyxDQUFDO2FBQ047WUFFRCxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLDBCQUFnQixDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDO1lBQzdELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDbkMsQ0FBQztLQUFBO0NBQ0o7QUFFRCxrQkFBZSxJQUFJLFlBQVksRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFVVEhPUklaRURfVVNFUlMgZnJvbSBcIi4uL2F1dGhvcml6ZWQtdXNlcnNcIjtcclxuaW1wb3J0IFRlbGVncmFtQm90IGZyb20gXCJub2RlLXRlbGVncmFtLWJvdC1hcGlcIjtcclxuaW1wb3J0IFRlbGVncmFtQ29tbWFuZEJhc2UgZnJvbSBcIi4vY29tbWFuZC1iYXNlXCI7XHJcbmltcG9ydCB7IENvbW1hbmRJbmZvIH0gZnJvbSBcIi4vY29tbWFuZC1pbmZvXCI7XHJcblxyXG5jbGFzcyBVc2Vyc0NvbW1hbmQgZXh0ZW5kcyBUZWxlZ3JhbUNvbW1hbmRCYXNlIHtcclxuICAgIHB1YmxpYyBpc01hdGNoKGNvbW1hbmRJbmZvOiBDb21tYW5kSW5mbyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBjb21tYW5kSW5mby5jb21tYW5kID09PSBcIi91c2Vyc1wiO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBleGVjdXRlKGNvbW1hbmQ6IENvbW1hbmRJbmZvLCBib3Q6IFRlbGVncmFtQm90KTogUHJvbWlzZTxUZWxlZ3JhbUJvdC5NZXNzYWdlIHwgRXJyb3I+IHtcclxuICAgICAgICBpZiAoIWNvbW1hbmQgfHwgY29tbWFuZC5jb21tYW5kICE9PSBcIi91c2Vyc1wiKSB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGNvbW1hbmRcIik7XHJcblxyXG4gICAgICAgIGxldCBvcHRpb24gPSBjb21tYW5kLm9wdGlvbiB8fCBcInNob3dcIjtcclxuXHJcbiAgICAgICAgc3dpdGNoIChvcHRpb24pIHtcclxuICAgICAgICAgICAgY2FzZSBcInNob3dcIjogcmV0dXJuIGF3YWl0IHRoaXMuc2hvdyhib3QsIGNvbW1hbmQpO1xyXG4gICAgICAgICAgICBjYXNlIFwiYWRkXCI6IHJldHVybiBhd2FpdCB0aGlzLmFkZChib3QsIGNvbW1hbmQpO1xyXG4gICAgICAgICAgICBjYXNlIFwicmVtb3ZlXCI6IHJldHVybiBhd2FpdCB0aGlzLnJlbW92ZShib3QsIGNvbW1hbmQpO1xyXG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gYm90LnNlbmRNZXNzYWdlKGNvbW1hbmQuY2hhdElkLCBgU29ycnksIEkgZG9uJ3Qga25vdyBob3cgdG8gPGI+JHtjb21tYW5kLm9wdGlvbn08L2I+IHVzZXJzYCwge1xyXG4gICAgICAgICAgICAgICAgcmVwbHlfdG9fbWVzc2FnZV9pZDogY29tbWFuZC5tZXNzYWdlSWQsXHJcbiAgICAgICAgICAgICAgICBwYXJzZV9tb2RlOiBcIkhUTUxcIlxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBzaG93KGJvdDogVGVsZWdyYW1Cb3QsIGNvbW1hbmQ6IENvbW1hbmRJbmZvKTogUHJvbWlzZTxUZWxlZ3JhbUJvdC5NZXNzYWdlIHwgRXJyb3I+IHtcclxuICAgICAgICBsZXQgdXNlcnMgPSBPYmplY3Qua2V5cyhBVVRIT1JJWkVEX1VTRVJTKS5maWx0ZXIoayA9PiBBVVRIT1JJWkVEX1VTRVJTW2tdKS5yZWR1Y2UoKHBydiwgY3VyLCBpZHgsIGFsbCkgPT4gYCR7cHJ2fVxcclxcbiR7Y3VyfWAsIFwiXCIpO1xyXG4gICAgICAgIHJldHVybiBhd2FpdCBib3Quc2VuZE1lc3NhZ2UoY29tbWFuZC5jaGF0SWQsIHVzZXJzLCB7XHJcbiAgICAgICAgICAgIHJlcGx5X3RvX21lc3NhZ2VfaWQ6IGNvbW1hbmQubWVzc2FnZUlkXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBhZGQoYm90OiBUZWxlZ3JhbUJvdCwgY29tbWFuZDogQ29tbWFuZEluZm8pOiBQcm9taXNlPFRlbGVncmFtQm90Lk1lc3NhZ2UgfCBFcnJvcj4ge1xyXG4gICAgICAgIGlmICghY29tbWFuZC5hcmdzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBib3Quc2VuZE1lc3NhZ2UoY29tbWFuZC5jaGF0SWQsIFwiUGxlYXNlIHByb3ZpZGUgYSBsaXN0IG9mIHNwYWNlIHNlcGFyYXRlZCB1c2Vyc1wiLCB7XHJcbiAgICAgICAgICAgICAgICByZXBseV90b19tZXNzYWdlX2lkOiBjb21tYW5kLm1lc3NhZ2VJZFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbW1hbmQuYXJncy5mb3JFYWNoKHVzZXIgPT4gQVVUSE9SSVpFRF9VU0VSU1t1c2VyXSA9IHRydWUpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNob3coYm90LCBjb21tYW5kKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIHJlbW92ZShib3Q6IFRlbGVncmFtQm90LCBjb21tYW5kOiBDb21tYW5kSW5mbyk6IFByb21pc2U8VGVsZWdyYW1Cb3QuTWVzc2FnZSB8IEVycm9yPiB7XHJcbiAgICAgICAgaWYgKCFjb21tYW5kLmFyZ3MpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGJvdC5zZW5kTWVzc2FnZShjb21tYW5kLmNoYXRJZCwgXCJQbGVhc2UgcHJvdmlkZSBhIGxpc3Qgb2Ygc3BhY2Ugc2VwYXJhdGVkIHVzZXJzXCIsIHtcclxuICAgICAgICAgICAgICAgIHJlcGx5X3RvX21lc3NhZ2VfaWQ6IGNvbW1hbmQubWVzc2FnZUlkXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29tbWFuZC5hcmdzLmZvckVhY2godXNlciA9PiBBVVRIT1JJWkVEX1VTRVJTW3VzZXJdID0gZmFsc2UpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNob3coYm90LCBjb21tYW5kKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IFVzZXJzQ29tbWFuZCgpOyJdfQ==