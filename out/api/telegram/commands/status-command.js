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
let _doorStatus = true;
class StatusCommand extends command_base_1.default {
    isMatch(msg) {
        return msg.text === "/status";
    }
    execute(bot, msg) {
        return __awaiter(this, void 0, void 0, function* () {
            let doorStatus = _doorStatus;
            return yield bot.sendMessage(msg.chat.id, `Door is <b>${doorStatus ? "closed" : "open"}</b>`, {
                reply_to_message_id: msg.message_id,
                parse_mode: "HTML",
                reply_markup: {
                    keyboard: [[{
                                text: `/door ${doorStatus ? "open" : "close"}`
                            }]],
                    one_time_keyboard: true
                }
            });
        });
    }
}
exports.default = new StatusCommand();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHVzLWNvbW1hbmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBpL3RlbGVncmFtL2NvbW1hbmRzL3N0YXR1cy1jb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxrRUFBaUQ7QUFHakQsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDO0FBQ3ZCLG1CQUFvQixTQUFRLHNCQUFtQjtJQUNwQyxPQUFPLENBQUMsR0FBd0I7UUFDbkMsT0FBTyxHQUFHLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQztJQUNsQyxDQUFDO0lBRVksT0FBTyxDQUFDLEdBQWdCLEVBQUUsR0FBd0I7O1lBRTNELElBQUksVUFBVSxHQUFHLFdBQVcsQ0FBQztZQUM3QixPQUFPLE1BQU0sR0FBRyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxjQUFjLFVBQVUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLE1BQU0sRUFBRTtnQkFDMUYsbUJBQW1CLEVBQUUsR0FBRyxDQUFDLFVBQVU7Z0JBQ25DLFVBQVUsRUFBRSxNQUFNO2dCQUNsQixZQUFZLEVBQUU7b0JBQ1YsUUFBUSxFQUFFLENBQUMsQ0FBQztnQ0FDUixJQUFJLEVBQUUsU0FBUyxVQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFOzZCQUNqRCxDQUFDLENBQUM7b0JBQ0gsaUJBQWlCLEVBQUUsSUFBSTtpQkFDMUI7YUFDSixDQUFDLENBQUE7UUFDTixDQUFDO0tBQUE7Q0FDSjtBQUVELGtCQUFlLElBQUksYUFBYSxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGVsZWdyYW1Cb3QgZnJvbSBcIm5vZGUtdGVsZWdyYW0tYm90LWFwaVwiO1xyXG5pbXBvcnQgVGVsZWdyYW1Db21tYW5kQmFzZSBmcm9tIFwiLi9jb21tYW5kLWJhc2VcIjtcclxuLy8gaW1wb3J0IHsgR3Bpb01hbmFnZXIgfSBmcm9tIFwiLi4vLi4vZ3Bpby1jb250cm9sbGVyXCJcclxuXHJcbmxldCBfZG9vclN0YXR1cyA9IHRydWU7XHJcbmNsYXNzIFN0YXR1c0NvbW1hbmQgZXh0ZW5kcyBUZWxlZ3JhbUNvbW1hbmRCYXNlIHtcclxuICAgIHB1YmxpYyBpc01hdGNoKG1zZzogVGVsZWdyYW1Cb3QuTWVzc2FnZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBtc2cudGV4dCA9PT0gXCIvc3RhdHVzXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGV4ZWN1dGUoYm90OiBUZWxlZ3JhbUJvdCwgbXNnOiBUZWxlZ3JhbUJvdC5NZXNzYWdlKTogUHJvbWlzZTxUZWxlZ3JhbUJvdC5NZXNzYWdlIHwgRXJyb3I+IHtcclxuICAgICAgICAvLyBsZXQgZG9vclN0YXR1cyA9IGF3YWl0IEdwaW9NYW5hZ2VyLnJlYWQoNCkgPT09IDA7XHJcbiAgICAgICAgbGV0IGRvb3JTdGF0dXMgPSBfZG9vclN0YXR1cztcclxuICAgICAgICByZXR1cm4gYXdhaXQgYm90LnNlbmRNZXNzYWdlKG1zZy5jaGF0LmlkLCBgRG9vciBpcyA8Yj4ke2Rvb3JTdGF0dXMgPyBcImNsb3NlZFwiIDogXCJvcGVuXCJ9PC9iPmAsIHtcclxuICAgICAgICAgICAgcmVwbHlfdG9fbWVzc2FnZV9pZDogbXNnLm1lc3NhZ2VfaWQsXHJcbiAgICAgICAgICAgIHBhcnNlX21vZGU6IFwiSFRNTFwiLFxyXG4gICAgICAgICAgICByZXBseV9tYXJrdXA6IHtcclxuICAgICAgICAgICAgICAgIGtleWJvYXJkOiBbW3tcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBgL2Rvb3IgJHtkb29yU3RhdHVzID8gXCJvcGVuXCIgOiBcImNsb3NlXCJ9YFxyXG4gICAgICAgICAgICAgICAgfV1dLFxyXG4gICAgICAgICAgICAgICAgb25lX3RpbWVfa2V5Ym9hcmQ6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBTdGF0dXNDb21tYW5kKCk7Il19