"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const door_command_1 = __importDefault(require("./door-command"));
const hello_command_1 = __importDefault(require("./hello-command"));
const users_command_1 = __importDefault(require("./users-command"));
const commands = [
    door_command_1.default,
    hello_command_1.default,
    users_command_1.default
];
exports.default = commands;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBpL3RlbGVncmFtL2NvbW1hbmRzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0Esa0VBQXlDO0FBQ3pDLG9FQUEyQztBQUMzQyxvRUFBMkM7QUFFM0MsTUFBTSxRQUFRLEdBQTBCO0lBQ3BDLHNCQUFXO0lBQ1gsdUJBQVk7SUFDWix1QkFBWTtDQUNmLENBQUM7QUFFRixrQkFBZSxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGVsZWdyYW1Db21tYW5kQmFzZSBmcm9tIFwiLi9jb21tYW5kLWJhc2VcIjtcclxuaW1wb3J0IGRvb3JDb21tYW5kIGZyb20gXCIuL2Rvb3ItY29tbWFuZFwiO1xyXG5pbXBvcnQgaGVsbG9Db21tYW5kIGZyb20gXCIuL2hlbGxvLWNvbW1hbmRcIjtcclxuaW1wb3J0IHVzZXJzQ29tbWFuZCBmcm9tIFwiLi91c2Vycy1jb21tYW5kXCI7XHJcblxyXG5jb25zdCBjb21tYW5kczogVGVsZWdyYW1Db21tYW5kQmFzZVtdID0gW1xyXG4gICAgZG9vckNvbW1hbmQsXHJcbiAgICBoZWxsb0NvbW1hbmQsXHJcbiAgICB1c2Vyc0NvbW1hbmRcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbW1hbmRzOyJdfQ==