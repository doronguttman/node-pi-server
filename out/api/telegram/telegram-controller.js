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
const authorized_users_1 = __importDefault(require("./authorized-users"));
const node_telegram_bot_api_1 = __importDefault(require("node-telegram-bot-api"));
const index_1 = __importDefault(require("./commands/index"));
const TOKEN = "579172390:AAF_R_w38DbUZ4fX0uRbz1WTHd0bJRTtn4g";
class TelegramController {
    constructor(express) {
        this._bot = new node_telegram_bot_api_1.default(TOKEN, {
            polling: true,
        });
        this._bot.on("polling_error", (error) => this.handlePollingError(error));
        this._bot.on("message", (msg) => this.handleMessage(msg));
        express.get("/api/telegram", (req, res, next) => this.getBotStatus(req, res, next));
    }
    getBotStatus(req, res, next) {
        this._bot.getMe()
            .then(me => {
            res.status(200).json({
                me: me,
                isPolling: this._bot.isPolling
            });
        })
            .catch(err => next(err));
    }
    handlePollingError(err) {
        console.error(`${new Date().toISOString()} ERR ${TelegramController.name}.${this.handlePollingError.name}`, err);
    }
    handleMessage(msg) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`${new Date().toISOString()} ${TelegramController.name}.${this.handleMessage.name}`, msg);
            try {
                this.isAuthorized(msg);
                let command = index_1.default.find(c => c.isMatch(msg));
                if (command) {
                    let rslt = yield command.execute(this._bot, msg);
                    if (rslt instanceof Error) {
                        throw rslt;
                    }
                    else {
                        console.log(`${new Date().toISOString()} ${TelegramController.name}.${this.handleMessage.name}`, rslt);
                    }
                }
                else {
                    this._bot.sendMessage(msg.chat.id, "Huh?!?", {
                        reply_to_message_id: msg.message_id
                    });
                }
            }
            catch (e) {
                console.error(`${new Date().toISOString()} ${TelegramController.name}.${this.handleMessage.name}`, e.stack && e.stack || e);
            }
        });
    }
    isAuthorized(msg) {
        let user = msg.from && msg.from.username;
        if (!user || !authorized_users_1.default[user]) {
            throw new Error("Unauthorized user");
        }
        return true;
    }
}
exports.TelegramController = TelegramController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVsZWdyYW0tY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvdGVsZWdyYW0vdGVsZWdyYW0tY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsMEVBQWtEO0FBQ2xELGtGQUFnRDtBQUNoRCw2REFBd0M7QUFFeEMsTUFBTSxLQUFLLEdBQUcsK0NBQStDLENBQUM7QUFFOUQ7SUFHSSxZQUFZLE9BQWdCO1FBQ3hCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSwrQkFBVyxDQUFDLEtBQUssRUFBRTtZQUMvQixPQUFPLEVBQUUsSUFBSTtTQUNoQixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLEdBQXdCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUUvRSxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN4RixDQUFDO0lBRU8sWUFBWSxDQUFDLEdBQVksRUFBRSxHQUFhLEVBQUUsSUFBa0I7UUFDaEUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7YUFDWixJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDUCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDakIsRUFBRSxFQUFFLEVBQUU7Z0JBQ04sU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUzthQUNqQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRU8sa0JBQWtCLENBQUMsR0FBVTtRQUNqQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsUUFBUSxrQkFBa0IsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3JILENBQUM7SUFFYSxhQUFhLENBQUMsR0FBd0I7O1lBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxJQUFJLGtCQUFrQixDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ3RHLElBQUk7Z0JBQ0EsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDdkIsSUFBSSxPQUFPLEdBQUcsZUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDakQsSUFBSSxPQUFPLEVBQUU7b0JBQ1QsSUFBSSxJQUFJLEdBQUcsTUFBTSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUE7b0JBQ2hELElBQUksSUFBSSxZQUFZLEtBQUssRUFBRTt3QkFDdkIsTUFBTSxJQUFJLENBQUM7cUJBQ2Q7eUJBQU07d0JBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLElBQUksa0JBQWtCLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7cUJBQzFHO2lCQUNKO3FCQUFNO29CQUNILElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRTt3QkFDekMsbUJBQW1CLEVBQUUsR0FBRyxDQUFDLFVBQVU7cUJBQ3RDLENBQUMsQ0FBQztpQkFDTjthQUNKO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1IsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLElBQUksa0JBQWtCLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQy9IO1FBQ0wsQ0FBQztLQUFBO0lBRU8sWUFBWSxDQUFDLEdBQXdCO1FBQ3pDLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDekMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLDBCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQztTQUN4QztRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7Q0FDSjtBQXpERCxnREF5REMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFeHByZXNzLCBSZXF1ZXN0LCBSZXNwb25zZSwgTmV4dEZ1bmN0aW9uIH0gZnJvbSBcImV4cHJlc3NcIjtcclxuaW1wb3J0IEFVVEhPUklaRURfVVNFUlMgZnJvbSBcIi4vYXV0aG9yaXplZC11c2Vyc1wiO1xyXG5pbXBvcnQgVGVsZWdyYW1Cb3QgZnJvbSBcIm5vZGUtdGVsZWdyYW0tYm90LWFwaVwiO1xyXG5pbXBvcnQgY29tbWFuZHMgZnJvbSBcIi4vY29tbWFuZHMvaW5kZXhcIjtcclxuXHJcbmNvbnN0IFRPS0VOID0gXCI1NzkxNzIzOTA6QUFGX1JfdzM4RGJVWjRmWDB1UmJ6MVdUSGQwYkpSVHRuNGdcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUZWxlZ3JhbUNvbnRyb2xsZXIge1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfYm90OiBUZWxlZ3JhbUJvdDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihleHByZXNzOiBFeHByZXNzKSB7XHJcbiAgICAgICAgdGhpcy5fYm90ID0gbmV3IFRlbGVncmFtQm90KFRPS0VOLCB7XHJcbiAgICAgICAgICAgIHBvbGxpbmc6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5fYm90Lm9uKFwicG9sbGluZ19lcnJvclwiLCAoZXJyb3IpID0+IHRoaXMuaGFuZGxlUG9sbGluZ0Vycm9yKGVycm9yKSk7XHJcbiAgICAgICAgdGhpcy5fYm90Lm9uKFwibWVzc2FnZVwiLCAobXNnOiBUZWxlZ3JhbUJvdC5NZXNzYWdlKSA9PiB0aGlzLmhhbmRsZU1lc3NhZ2UobXNnKSk7XHJcblxyXG4gICAgICAgIGV4cHJlc3MuZ2V0KFwiL2FwaS90ZWxlZ3JhbVwiLCAocmVxLCByZXMsIG5leHQpID0+IHRoaXMuZ2V0Qm90U3RhdHVzKHJlcSwgcmVzLCBuZXh0KSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRCb3RTdGF0dXMocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9ib3QuZ2V0TWUoKVxyXG4gICAgICAgICAgICAudGhlbihtZSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgbWU6IG1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzUG9sbGluZzogdGhpcy5fYm90LmlzUG9sbGluZ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gbmV4dChlcnIpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZVBvbGxpbmdFcnJvcihlcnI6IEVycm9yKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihgJHtuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCl9IEVSUiAke1RlbGVncmFtQ29udHJvbGxlci5uYW1lfS4ke3RoaXMuaGFuZGxlUG9sbGluZ0Vycm9yLm5hbWV9YCwgZXJyKTsgIC8vID0+ICdFRkFUQUwnXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBoYW5kbGVNZXNzYWdlKG1zZzogVGVsZWdyYW1Cb3QuTWVzc2FnZSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGAke25ldyBEYXRlKCkudG9JU09TdHJpbmcoKX0gJHtUZWxlZ3JhbUNvbnRyb2xsZXIubmFtZX0uJHt0aGlzLmhhbmRsZU1lc3NhZ2UubmFtZX1gLCBtc2cpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNBdXRob3JpemVkKG1zZyk7XHJcbiAgICAgICAgICAgIGxldCBjb21tYW5kID0gY29tbWFuZHMuZmluZChjID0+IGMuaXNNYXRjaChtc2cpKTtcclxuICAgICAgICAgICAgaWYgKGNvbW1hbmQpIHtcclxuICAgICAgICAgICAgICAgIGxldCByc2x0ID0gYXdhaXQgY29tbWFuZC5leGVjdXRlKHRoaXMuX2JvdCwgbXNnKVxyXG4gICAgICAgICAgICAgICAgaWYgKHJzbHQgaW5zdGFuY2VvZiBFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IHJzbHQ7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke25ldyBEYXRlKCkudG9JU09TdHJpbmcoKX0gJHtUZWxlZ3JhbUNvbnRyb2xsZXIubmFtZX0uJHt0aGlzLmhhbmRsZU1lc3NhZ2UubmFtZX1gLCByc2x0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2JvdC5zZW5kTWVzc2FnZShtc2cuY2hhdC5pZCwgXCJIdWg/IT9cIiwge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcGx5X3RvX21lc3NhZ2VfaWQ6IG1zZy5tZXNzYWdlX2lkXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgJHtuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCl9ICR7VGVsZWdyYW1Db250cm9sbGVyLm5hbWV9LiR7dGhpcy5oYW5kbGVNZXNzYWdlLm5hbWV9YCwgZS5zdGFjayAmJiBlLnN0YWNrIHx8IGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGlzQXV0aG9yaXplZChtc2c6IFRlbGVncmFtQm90Lk1lc3NhZ2UpOiBib29sZWFuIHtcclxuICAgICAgICBsZXQgdXNlciA9IG1zZy5mcm9tICYmIG1zZy5mcm9tLnVzZXJuYW1lO1xyXG4gICAgICAgIGlmICghdXNlciB8fCAhQVVUSE9SSVpFRF9VU0VSU1t1c2VyXSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWQgdXNlclwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbn1cclxuIl19