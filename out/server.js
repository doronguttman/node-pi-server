"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = process.env["PORT"] && Number(process.env["PORT"]) || 80;
app.use("/", express_1.default.static(`${__dirname}/../static`));
app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3NlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNEQUE4QjtBQUM5QixNQUFNLEdBQUcsR0FBRyxpQkFBTyxFQUFFLENBQUM7QUFDdEIsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUV0RSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxpQkFBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLFNBQVMsWUFBWSxDQUFDLENBQUMsQ0FBQztBQUV2RCxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUM5QyxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XHJcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcclxuY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52W1wiUE9SVFwiXSAmJiBOdW1iZXIocHJvY2Vzcy5lbnZbXCJQT1JUXCJdKSB8fCA4MDtcclxuXHJcbmFwcC51c2UoXCIvXCIsIGV4cHJlc3Muc3RhdGljKGAke19fZGlybmFtZX0vLi4vc3RhdGljYCkpO1xyXG5cclxuYXBwLmxpc3Rlbihwb3J0LCAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhgTGlzdGVuaW5nIG9uIHBvcnQ6ICR7cG9ydH1gKTtcclxufSk7XHJcbiJdfQ==