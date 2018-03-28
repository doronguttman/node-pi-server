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
class DoorCommand extends command_base_1.default {
    isMatch(msg) {
        return msg.text === "/door";
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
exports.default = new DoorCommand();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9vci1jb21tYW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FwaS90ZWxlZ3JhbS9jb21tYW5kcy9kb29yLWNvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLGtFQUFpRDtBQUdqRCxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUM7QUFDdkIsaUJBQWtCLFNBQVEsc0JBQW1CO0lBQ2xDLE9BQU8sQ0FBQyxHQUF3QjtRQUNuQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLEtBQUssT0FBTyxDQUFDO0lBQ2hDLENBQUM7SUFFWSxPQUFPLENBQUMsR0FBZ0IsRUFBRSxHQUF3Qjs7WUFFM0QsSUFBSSxVQUFVLEdBQUcsV0FBVyxDQUFDO1lBQzdCLE9BQU8sTUFBTSxHQUFHLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLGNBQWMsVUFBVSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sTUFBTSxFQUFFO2dCQUMxRixtQkFBbUIsRUFBRSxHQUFHLENBQUMsVUFBVTtnQkFDbkMsVUFBVSxFQUFFLE1BQU07Z0JBQ2xCLFlBQVksRUFBRTtvQkFDVixRQUFRLEVBQUUsQ0FBQyxDQUFDO2dDQUNSLElBQUksRUFBRSxTQUFTLFVBQVUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUU7NkJBQ2pELENBQUMsQ0FBQztvQkFDSCxpQkFBaUIsRUFBRSxJQUFJO2lCQUMxQjthQUNKLENBQUMsQ0FBQTtRQUNOLENBQUM7S0FBQTtDQUNKO0FBRUQsa0JBQWUsSUFBSSxXQUFXLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUZWxlZ3JhbUJvdCBmcm9tIFwibm9kZS10ZWxlZ3JhbS1ib3QtYXBpXCI7XHJcbmltcG9ydCBUZWxlZ3JhbUNvbW1hbmRCYXNlIGZyb20gXCIuL2NvbW1hbmQtYmFzZVwiO1xyXG4vLyBpbXBvcnQgeyBHcGlvTWFuYWdlciB9IGZyb20gXCIuLi8uLi9ncGlvLWNvbnRyb2xsZXJcIlxyXG5cclxubGV0IF9kb29yU3RhdHVzID0gdHJ1ZTtcclxuY2xhc3MgRG9vckNvbW1hbmQgZXh0ZW5kcyBUZWxlZ3JhbUNvbW1hbmRCYXNlIHtcclxuICAgIHB1YmxpYyBpc01hdGNoKG1zZzogVGVsZWdyYW1Cb3QuTWVzc2FnZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBtc2cudGV4dCA9PT0gXCIvZG9vclwiO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBleGVjdXRlKGJvdDogVGVsZWdyYW1Cb3QsIG1zZzogVGVsZWdyYW1Cb3QuTWVzc2FnZSk6IFByb21pc2U8VGVsZWdyYW1Cb3QuTWVzc2FnZSB8IEVycm9yPiB7XHJcbiAgICAgICAgLy8gbGV0IGRvb3JTdGF0dXMgPSBhd2FpdCBHcGlvTWFuYWdlci5yZWFkKDQpID09PSAwO1xyXG4gICAgICAgIGxldCBkb29yU3RhdHVzID0gX2Rvb3JTdGF0dXM7XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IGJvdC5zZW5kTWVzc2FnZShtc2cuY2hhdC5pZCwgYERvb3IgaXMgPGI+JHtkb29yU3RhdHVzID8gXCJjbG9zZWRcIiA6IFwib3BlblwifTwvYj5gLCB7XHJcbiAgICAgICAgICAgIHJlcGx5X3RvX21lc3NhZ2VfaWQ6IG1zZy5tZXNzYWdlX2lkLFxyXG4gICAgICAgICAgICBwYXJzZV9tb2RlOiBcIkhUTUxcIixcclxuICAgICAgICAgICAgcmVwbHlfbWFya3VwOiB7XHJcbiAgICAgICAgICAgICAgICBrZXlib2FyZDogW1t7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogYC9kb29yICR7ZG9vclN0YXR1cyA/IFwib3BlblwiIDogXCJjbG9zZVwifWBcclxuICAgICAgICAgICAgICAgIH1dXSxcclxuICAgICAgICAgICAgICAgIG9uZV90aW1lX2tleWJvYXJkOiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgRG9vckNvbW1hbmQoKTsiXX0=