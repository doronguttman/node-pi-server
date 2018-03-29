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
    isMatch(commandInfo) {
        return commandInfo.command === "/door";
    }
    execute(command, bot) {
        return __awaiter(this, void 0, void 0, function* () {
            let doorStatus = _doorStatus;
            return yield bot.sendMessage(command.chatId, `Door is <b>${doorStatus ? "closed" : "open"}</b>`, {
                reply_to_message_id: command.messageId,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9vci1jb21tYW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FwaS90ZWxlZ3JhbS9jb21tYW5kcy9kb29yLWNvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLGtFQUFpRDtBQUlqRCxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUM7QUFDdkIsaUJBQWtCLFNBQVEsc0JBQW1CO0lBQ2xDLE9BQU8sQ0FBQyxXQUF3QjtRQUNuQyxPQUFPLFdBQVcsQ0FBQyxPQUFPLEtBQUssT0FBTyxDQUFDO0lBQzNDLENBQUM7SUFFWSxPQUFPLENBQUMsT0FBb0IsRUFBRSxHQUFnQjs7WUFFdkQsSUFBSSxVQUFVLEdBQUcsV0FBVyxDQUFDO1lBQzdCLE9BQU8sTUFBTSxHQUFHLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsY0FBYyxVQUFVLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxNQUFNLEVBQUU7Z0JBQzdGLG1CQUFtQixFQUFFLE9BQU8sQ0FBQyxTQUFTO2dCQUN0QyxVQUFVLEVBQUUsTUFBTTtnQkFDbEIsWUFBWSxFQUFFO29CQUNWLFFBQVEsRUFBRSxDQUFDLENBQUM7Z0NBQ1IsSUFBSSxFQUFFLFNBQVMsVUFBVSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRTs2QkFDakQsQ0FBQyxDQUFDO29CQUNILGlCQUFpQixFQUFFLElBQUk7aUJBQzFCO2FBQ0osQ0FBQyxDQUFBO1FBQ04sQ0FBQztLQUFBO0NBQ0o7QUFFRCxrQkFBZSxJQUFJLFdBQVcsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRlbGVncmFtQm90IGZyb20gXCJub2RlLXRlbGVncmFtLWJvdC1hcGlcIjtcclxuaW1wb3J0IFRlbGVncmFtQ29tbWFuZEJhc2UgZnJvbSBcIi4vY29tbWFuZC1iYXNlXCI7XHJcbmltcG9ydCB7IENvbW1hbmRJbmZvIH0gZnJvbSBcIi4vY29tbWFuZC1pbmZvXCI7XHJcbi8vIGltcG9ydCB7IEdwaW9NYW5hZ2VyIH0gZnJvbSBcIi4uLy4uL2dwaW8tY29udHJvbGxlclwiXHJcblxyXG5sZXQgX2Rvb3JTdGF0dXMgPSB0cnVlO1xyXG5jbGFzcyBEb29yQ29tbWFuZCBleHRlbmRzIFRlbGVncmFtQ29tbWFuZEJhc2Uge1xyXG4gICAgcHVibGljIGlzTWF0Y2goY29tbWFuZEluZm86IENvbW1hbmRJbmZvKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIGNvbW1hbmRJbmZvLmNvbW1hbmQgPT09IFwiL2Rvb3JcIjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgZXhlY3V0ZShjb21tYW5kOiBDb21tYW5kSW5mbywgYm90OiBUZWxlZ3JhbUJvdCk6IFByb21pc2U8VGVsZWdyYW1Cb3QuTWVzc2FnZSB8IEVycm9yPiB7XHJcbiAgICAgICAgLy8gbGV0IGRvb3JTdGF0dXMgPSBhd2FpdCBHcGlvTWFuYWdlci5yZWFkKDQpID09PSAwO1xyXG4gICAgICAgIGxldCBkb29yU3RhdHVzID0gX2Rvb3JTdGF0dXM7XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IGJvdC5zZW5kTWVzc2FnZShjb21tYW5kLmNoYXRJZCwgYERvb3IgaXMgPGI+JHtkb29yU3RhdHVzID8gXCJjbG9zZWRcIiA6IFwib3BlblwifTwvYj5gLCB7XHJcbiAgICAgICAgICAgIHJlcGx5X3RvX21lc3NhZ2VfaWQ6IGNvbW1hbmQubWVzc2FnZUlkLFxyXG4gICAgICAgICAgICBwYXJzZV9tb2RlOiBcIkhUTUxcIixcclxuICAgICAgICAgICAgcmVwbHlfbWFya3VwOiB7XHJcbiAgICAgICAgICAgICAgICBrZXlib2FyZDogW1t7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogYC9kb29yICR7ZG9vclN0YXR1cyA/IFwib3BlblwiIDogXCJjbG9zZVwifWBcclxuICAgICAgICAgICAgICAgIH1dXSxcclxuICAgICAgICAgICAgICAgIG9uZV90aW1lX2tleWJvYXJkOiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgRG9vckNvbW1hbmQoKTsiXX0=