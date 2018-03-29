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
const command_info_1 = require("./commands/command-info");
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
                let commandInfo = new command_info_1.CommandInfo(msg);
                let command = index_1.default.find(c => c.isMatch(commandInfo));
                if (command && command.authorizationRequired)
                    this.throwNotAuthorized(msg);
                if (command) {
                    let rslt = yield command.execute(commandInfo, this._bot);
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
    throwNotAuthorized(msg) {
        let user = msg.from && msg.from.username;
        if (!user || !authorized_users_1.default[user]) {
            throw new Error("Unauthorized user");
        }
    }
}
exports.TelegramController = TelegramController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVsZWdyYW0tY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvdGVsZWdyYW0vdGVsZWdyYW0tY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsMEVBQWtEO0FBQ2xELGtGQUFnRDtBQUNoRCw2REFBd0M7QUFDeEMsMERBQXNEO0FBRXRELE1BQU0sS0FBSyxHQUFHLCtDQUErQyxDQUFDO0FBRTlEO0lBR0ksWUFBWSxPQUFnQjtRQUN4QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksK0JBQVcsQ0FBQyxLQUFLLEVBQUU7WUFDL0IsT0FBTyxFQUFFLElBQUk7U0FDaEIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsZUFBZSxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN6RSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxHQUF3QixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFL0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDeEYsQ0FBQztJQUVPLFlBQVksQ0FBQyxHQUFZLEVBQUUsR0FBYSxFQUFFLElBQWtCO1FBQ2hFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO2FBQ1osSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQ1AsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ2pCLEVBQUUsRUFBRSxFQUFFO2dCQUNOLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVM7YUFDakMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVPLGtCQUFrQixDQUFDLEdBQVU7UUFDakMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLFFBQVEsa0JBQWtCLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNySCxDQUFDO0lBRWEsYUFBYSxDQUFDLEdBQXdCOztZQUNoRCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsSUFBSSxrQkFBa0IsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUN0RyxJQUFJO2dCQUNBLElBQUksV0FBVyxHQUFHLElBQUksMEJBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDdkMsSUFBSSxPQUFPLEdBQUcsZUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztnQkFDekQsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLHFCQUFxQjtvQkFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzNFLElBQUksT0FBTyxFQUFFO29CQUNULElBQUksSUFBSSxHQUFHLE1BQU0sT0FBTyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO29CQUN4RCxJQUFJLElBQUksWUFBWSxLQUFLLEVBQUU7d0JBQ3ZCLE1BQU0sSUFBSSxDQUFDO3FCQUNkO3lCQUFNO3dCQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxJQUFJLGtCQUFrQixDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO3FCQUMxRztpQkFDSjtxQkFBTTtvQkFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUU7d0JBQ3pDLG1CQUFtQixFQUFFLEdBQUcsQ0FBQyxVQUFVO3FCQUN0QyxDQUFDLENBQUM7aUJBQ047YUFDSjtZQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNSLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxJQUFJLGtCQUFrQixDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQzthQUMvSDtRQUNMLENBQUM7S0FBQTtJQUVPLGtCQUFrQixDQUFDLEdBQXdCO1FBQy9DLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDekMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLDBCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQztTQUN4QztJQUNMLENBQUM7Q0FDSjtBQXpERCxnREF5REMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFeHByZXNzLCBSZXF1ZXN0LCBSZXNwb25zZSwgTmV4dEZ1bmN0aW9uIH0gZnJvbSBcImV4cHJlc3NcIjtcclxuaW1wb3J0IEFVVEhPUklaRURfVVNFUlMgZnJvbSBcIi4vYXV0aG9yaXplZC11c2Vyc1wiO1xyXG5pbXBvcnQgVGVsZWdyYW1Cb3QgZnJvbSBcIm5vZGUtdGVsZWdyYW0tYm90LWFwaVwiO1xyXG5pbXBvcnQgY29tbWFuZHMgZnJvbSBcIi4vY29tbWFuZHMvaW5kZXhcIjtcclxuaW1wb3J0IHsgQ29tbWFuZEluZm8gfSBmcm9tIFwiLi9jb21tYW5kcy9jb21tYW5kLWluZm9cIjtcclxuXHJcbmNvbnN0IFRPS0VOID0gXCI1NzkxNzIzOTA6QUFGX1JfdzM4RGJVWjRmWDB1UmJ6MVdUSGQwYkpSVHRuNGdcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUZWxlZ3JhbUNvbnRyb2xsZXIge1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfYm90OiBUZWxlZ3JhbUJvdDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihleHByZXNzOiBFeHByZXNzKSB7XHJcbiAgICAgICAgdGhpcy5fYm90ID0gbmV3IFRlbGVncmFtQm90KFRPS0VOLCB7XHJcbiAgICAgICAgICAgIHBvbGxpbmc6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5fYm90Lm9uKFwicG9sbGluZ19lcnJvclwiLCAoZXJyb3IpID0+IHRoaXMuaGFuZGxlUG9sbGluZ0Vycm9yKGVycm9yKSk7XHJcbiAgICAgICAgdGhpcy5fYm90Lm9uKFwibWVzc2FnZVwiLCAobXNnOiBUZWxlZ3JhbUJvdC5NZXNzYWdlKSA9PiB0aGlzLmhhbmRsZU1lc3NhZ2UobXNnKSk7XHJcblxyXG4gICAgICAgIGV4cHJlc3MuZ2V0KFwiL2FwaS90ZWxlZ3JhbVwiLCAocmVxLCByZXMsIG5leHQpID0+IHRoaXMuZ2V0Qm90U3RhdHVzKHJlcSwgcmVzLCBuZXh0KSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRCb3RTdGF0dXMocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9ib3QuZ2V0TWUoKVxyXG4gICAgICAgICAgICAudGhlbihtZSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgbWU6IG1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzUG9sbGluZzogdGhpcy5fYm90LmlzUG9sbGluZ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gbmV4dChlcnIpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZVBvbGxpbmdFcnJvcihlcnI6IEVycm9yKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihgJHtuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCl9IEVSUiAke1RlbGVncmFtQ29udHJvbGxlci5uYW1lfS4ke3RoaXMuaGFuZGxlUG9sbGluZ0Vycm9yLm5hbWV9YCwgZXJyKTsgIC8vID0+ICdFRkFUQUwnXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBoYW5kbGVNZXNzYWdlKG1zZzogVGVsZWdyYW1Cb3QuTWVzc2FnZSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGAke25ldyBEYXRlKCkudG9JU09TdHJpbmcoKX0gJHtUZWxlZ3JhbUNvbnRyb2xsZXIubmFtZX0uJHt0aGlzLmhhbmRsZU1lc3NhZ2UubmFtZX1gLCBtc2cpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCBjb21tYW5kSW5mbyA9IG5ldyBDb21tYW5kSW5mbyhtc2cpO1xyXG4gICAgICAgICAgICBsZXQgY29tbWFuZCA9IGNvbW1hbmRzLmZpbmQoYyA9PiBjLmlzTWF0Y2goY29tbWFuZEluZm8pKTtcclxuICAgICAgICAgICAgaWYgKGNvbW1hbmQgJiYgY29tbWFuZC5hdXRob3JpemF0aW9uUmVxdWlyZWQpIHRoaXMudGhyb3dOb3RBdXRob3JpemVkKG1zZyk7XHJcbiAgICAgICAgICAgIGlmIChjb21tYW5kKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcnNsdCA9IGF3YWl0IGNvbW1hbmQuZXhlY3V0ZShjb21tYW5kSW5mbywgdGhpcy5fYm90KVxyXG4gICAgICAgICAgICAgICAgaWYgKHJzbHQgaW5zdGFuY2VvZiBFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IHJzbHQ7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke25ldyBEYXRlKCkudG9JU09TdHJpbmcoKX0gJHtUZWxlZ3JhbUNvbnRyb2xsZXIubmFtZX0uJHt0aGlzLmhhbmRsZU1lc3NhZ2UubmFtZX1gLCByc2x0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2JvdC5zZW5kTWVzc2FnZShtc2cuY2hhdC5pZCwgXCJIdWg/IT9cIiwge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcGx5X3RvX21lc3NhZ2VfaWQ6IG1zZy5tZXNzYWdlX2lkXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgJHtuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCl9ICR7VGVsZWdyYW1Db250cm9sbGVyLm5hbWV9LiR7dGhpcy5oYW5kbGVNZXNzYWdlLm5hbWV9YCwgZS5zdGFjayAmJiBlLnN0YWNrIHx8IGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHRocm93Tm90QXV0aG9yaXplZChtc2c6IFRlbGVncmFtQm90Lk1lc3NhZ2UpOiB2b2lkIHtcclxuICAgICAgICBsZXQgdXNlciA9IG1zZy5mcm9tICYmIG1zZy5mcm9tLnVzZXJuYW1lO1xyXG4gICAgICAgIGlmICghdXNlciB8fCAhQVVUSE9SSVpFRF9VU0VSU1t1c2VyXSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWQgdXNlclwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19