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
const utils_1 = require("../utils");
class UsersCommand extends command_base_1.default {
    isMatch(msg) {
        return msg.text && msg.text.startsWith("/users") || false;
    }
    execute(bot, msg) {
        return __awaiter(this, void 0, void 0, function* () {
            let command = utils_1.parseCommand(msg.text);
            if (!command || command.command !== "/users")
                throw new Error("Invalid command");
            if (!command.option)
                command.option = "show";
            switch (command.option) {
                case "show": return yield this.show(bot, msg);
                case "add": return yield this.add(bot, msg, command.args);
                case "remove": return yield this.remove(bot, msg, command.args);
                default: return bot.sendMessage(msg.chat.id, `Sorry, I don't know how to <b>${command.option}</b> users`, {
                    reply_to_message_id: msg.message_id,
                    parse_mode: "HTML"
                });
            }
        });
    }
    show(bot, msg) {
        return __awaiter(this, void 0, void 0, function* () {
            let users = Object.keys(authorized_users_1.default).filter(k => authorized_users_1.default[k]).reduce((prv, cur, idx, all) => `${prv}\r\n${cur}`, "");
            return yield bot.sendMessage(msg.chat.id, users, {
                reply_to_message_id: msg.message_id
            });
        });
    }
    add(bot, msg, users) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!users) {
                return yield bot.sendMessage(msg.chat.id, "Please provide a list of space separated users", {
                    reply_to_message_id: msg.message_id
                });
            }
            users.forEach(user => authorized_users_1.default[user] = true);
            return this.show(bot, msg);
        });
    }
    remove(bot, msg, users) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!users) {
                return yield bot.sendMessage(msg.chat.id, "Please provide a list of space separated users", {
                    reply_to_message_id: msg.message_id
                });
            }
            users.forEach(user => authorized_users_1.default[user] = false);
            return this.show(bot, msg);
        });
    }
}
exports.default = new UsersCommand();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMtY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvdGVsZWdyYW0vY29tbWFuZHMvdXNlcnMtY29tbWFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsMkVBQW1EO0FBRW5ELGtFQUFpRDtBQUNqRCxvQ0FBc0M7QUFFdEMsa0JBQW1CLFNBQVEsc0JBQW1CO0lBQ25DLE9BQU8sQ0FBQyxHQUF3QjtRQUNuQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksS0FBSyxDQUFDO0lBQzlELENBQUM7SUFFWSxPQUFPLENBQUMsR0FBZ0IsRUFBRSxHQUF3Qjs7WUFDM0QsSUFBSSxPQUFPLEdBQUcsb0JBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxLQUFLLFFBQVE7Z0JBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBRWpGLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTTtnQkFBRSxPQUFPLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUU3QyxRQUFRLE9BQU8sQ0FBQyxNQUFNLEVBQUU7Z0JBQ3BCLEtBQUssTUFBTSxDQUFDLENBQUMsT0FBTyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUM5QyxLQUFLLEtBQUssQ0FBQyxDQUFDLE9BQU8sTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUMxRCxLQUFLLFFBQVEsQ0FBQyxDQUFDLE9BQU8sTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNoRSxPQUFPLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsaUNBQWlDLE9BQU8sQ0FBQyxNQUFNLFlBQVksRUFBRTtvQkFDdEcsbUJBQW1CLEVBQUUsR0FBRyxDQUFDLFVBQVU7b0JBQ25DLFVBQVUsRUFBRSxNQUFNO2lCQUNyQixDQUFDLENBQUM7YUFDTjtRQUNMLENBQUM7S0FBQTtJQUVhLElBQUksQ0FBQyxHQUFnQixFQUFFLEdBQXdCOztZQUN6RCxJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLDBCQUFnQixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsMEJBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsR0FBRyxPQUFPLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ2xJLE9BQU8sTUFBTSxHQUFHLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRTtnQkFDN0MsbUJBQW1CLEVBQUUsR0FBRyxDQUFDLFVBQVU7YUFDdEMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztLQUFBO0lBRWEsR0FBRyxDQUFDLEdBQWdCLEVBQUUsR0FBd0IsRUFBRSxLQUEyQjs7WUFDckYsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDUixPQUFPLE1BQU0sR0FBRyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxnREFBZ0QsRUFBRTtvQkFDeEYsbUJBQW1CLEVBQUUsR0FBRyxDQUFDLFVBQVU7aUJBQ3RDLENBQUMsQ0FBQzthQUNOO1lBRUQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLDBCQUFnQixDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1lBQ3JELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDL0IsQ0FBQztLQUFBO0lBRWEsTUFBTSxDQUFDLEdBQWdCLEVBQUUsR0FBd0IsRUFBRSxLQUEyQjs7WUFDeEYsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDUixPQUFPLE1BQU0sR0FBRyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxnREFBZ0QsRUFBRTtvQkFDeEYsbUJBQW1CLEVBQUUsR0FBRyxDQUFDLFVBQVU7aUJBQ3RDLENBQUMsQ0FBQzthQUNOO1lBRUQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLDBCQUFnQixDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDO1lBQ3RELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDL0IsQ0FBQztLQUFBO0NBQ0o7QUFFRCxrQkFBZSxJQUFJLFlBQVksRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFVVEhPUklaRURfVVNFUlMgZnJvbSBcIi4uL2F1dGhvcml6ZWQtdXNlcnNcIjtcclxuaW1wb3J0IFRlbGVncmFtQm90IGZyb20gXCJub2RlLXRlbGVncmFtLWJvdC1hcGlcIjtcclxuaW1wb3J0IFRlbGVncmFtQ29tbWFuZEJhc2UgZnJvbSBcIi4vY29tbWFuZC1iYXNlXCI7XHJcbmltcG9ydCB7cGFyc2VDb21tYW5kfSBmcm9tIFwiLi4vdXRpbHNcIjtcclxuXHJcbmNsYXNzIFVzZXJzQ29tbWFuZCBleHRlbmRzIFRlbGVncmFtQ29tbWFuZEJhc2Uge1xyXG4gICAgcHVibGljIGlzTWF0Y2gobXNnOiBUZWxlZ3JhbUJvdC5NZXNzYWdlKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIG1zZy50ZXh0ICYmIG1zZy50ZXh0LnN0YXJ0c1dpdGgoXCIvdXNlcnNcIikgfHwgZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGV4ZWN1dGUoYm90OiBUZWxlZ3JhbUJvdCwgbXNnOiBUZWxlZ3JhbUJvdC5NZXNzYWdlKTogUHJvbWlzZTxUZWxlZ3JhbUJvdC5NZXNzYWdlIHwgRXJyb3I+IHtcclxuICAgICAgICBsZXQgY29tbWFuZCA9IHBhcnNlQ29tbWFuZChtc2cudGV4dCk7XHJcbiAgICAgICAgaWYgKCFjb21tYW5kIHx8IGNvbW1hbmQuY29tbWFuZCAhPT0gXCIvdXNlcnNcIikgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjb21tYW5kXCIpO1xyXG5cclxuICAgICAgICBpZiAoIWNvbW1hbmQub3B0aW9uKSBjb21tYW5kLm9wdGlvbiA9IFwic2hvd1wiO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKGNvbW1hbmQub3B0aW9uKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzaG93XCI6IHJldHVybiBhd2FpdCB0aGlzLnNob3coYm90LCBtc2cpO1xyXG4gICAgICAgICAgICBjYXNlIFwiYWRkXCI6IHJldHVybiBhd2FpdCB0aGlzLmFkZChib3QsIG1zZywgY29tbWFuZC5hcmdzKTtcclxuICAgICAgICAgICAgY2FzZSBcInJlbW92ZVwiOiByZXR1cm4gYXdhaXQgdGhpcy5yZW1vdmUoYm90LCBtc2csIGNvbW1hbmQuYXJncyk7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiBib3Quc2VuZE1lc3NhZ2UobXNnLmNoYXQuaWQsIGBTb3JyeSwgSSBkb24ndCBrbm93IGhvdyB0byA8Yj4ke2NvbW1hbmQub3B0aW9ufTwvYj4gdXNlcnNgLCB7XHJcbiAgICAgICAgICAgICAgICByZXBseV90b19tZXNzYWdlX2lkOiBtc2cubWVzc2FnZV9pZCxcclxuICAgICAgICAgICAgICAgIHBhcnNlX21vZGU6IFwiSFRNTFwiXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIHNob3coYm90OiBUZWxlZ3JhbUJvdCwgbXNnOiBUZWxlZ3JhbUJvdC5NZXNzYWdlKTogUHJvbWlzZTxUZWxlZ3JhbUJvdC5NZXNzYWdlIHwgRXJyb3I+IHtcclxuICAgICAgICBsZXQgdXNlcnMgPSBPYmplY3Qua2V5cyhBVVRIT1JJWkVEX1VTRVJTKS5maWx0ZXIoayA9PiBBVVRIT1JJWkVEX1VTRVJTW2tdKS5yZWR1Y2UoKHBydiwgY3VyLCBpZHgsIGFsbCkgPT4gYCR7cHJ2fVxcclxcbiR7Y3VyfWAsIFwiXCIpO1xyXG4gICAgICAgIHJldHVybiBhd2FpdCBib3Quc2VuZE1lc3NhZ2UobXNnLmNoYXQuaWQsIHVzZXJzLCB7XHJcbiAgICAgICAgICAgIHJlcGx5X3RvX21lc3NhZ2VfaWQ6IG1zZy5tZXNzYWdlX2lkXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBhZGQoYm90OiBUZWxlZ3JhbUJvdCwgbXNnOiBUZWxlZ3JhbUJvdC5NZXNzYWdlLCB1c2Vyczogc3RyaW5nW10gfCB1bmRlZmluZWQpOiBQcm9taXNlPFRlbGVncmFtQm90Lk1lc3NhZ2UgfCBFcnJvcj4ge1xyXG4gICAgICAgIGlmICghdXNlcnMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGJvdC5zZW5kTWVzc2FnZShtc2cuY2hhdC5pZCwgXCJQbGVhc2UgcHJvdmlkZSBhIGxpc3Qgb2Ygc3BhY2Ugc2VwYXJhdGVkIHVzZXJzXCIsIHtcclxuICAgICAgICAgICAgICAgIHJlcGx5X3RvX21lc3NhZ2VfaWQ6IG1zZy5tZXNzYWdlX2lkXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdXNlcnMuZm9yRWFjaCh1c2VyID0+IEFVVEhPUklaRURfVVNFUlNbdXNlcl0gPSB0cnVlKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5zaG93KGJvdCwgbXNnKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIHJlbW92ZShib3Q6IFRlbGVncmFtQm90LCBtc2c6IFRlbGVncmFtQm90Lk1lc3NhZ2UsIHVzZXJzOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCk6IFByb21pc2U8VGVsZWdyYW1Cb3QuTWVzc2FnZSB8IEVycm9yPiB7XHJcbiAgICAgICAgaWYgKCF1c2Vycykge1xyXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgYm90LnNlbmRNZXNzYWdlKG1zZy5jaGF0LmlkLCBcIlBsZWFzZSBwcm92aWRlIGEgbGlzdCBvZiBzcGFjZSBzZXBhcmF0ZWQgdXNlcnNcIiwge1xyXG4gICAgICAgICAgICAgICAgcmVwbHlfdG9fbWVzc2FnZV9pZDogbXNnLm1lc3NhZ2VfaWRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB1c2Vycy5mb3JFYWNoKHVzZXIgPT4gQVVUSE9SSVpFRF9VU0VSU1t1c2VyXSA9IGZhbHNlKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5zaG93KGJvdCwgbXNnKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IFVzZXJzQ29tbWFuZCgpOyJdfQ==