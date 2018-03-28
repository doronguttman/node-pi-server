"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./api/index"));
const port = process.env["PORT"] && Number(process.env["PORT"]) || 80;
const app = express_1.default();
index_1.default(app);
app.use("/", express_1.default.static(`${__dirname}/../static`));
app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3NlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNEQUE4QjtBQUM5Qix3REFBa0M7QUFDbEMsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUN0RSxNQUFNLEdBQUcsR0FBRyxpQkFBTyxFQUFFLENBQUM7QUFFdEIsZUFBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBRWIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsaUJBQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxTQUFTLFlBQVksQ0FBQyxDQUFDLENBQUM7QUFFdkQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLElBQUksRUFBRSxDQUFDLENBQUM7QUFDOUMsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xyXG5pbXBvcnQgaW5pdEFwaSBmcm9tIFwiLi9hcGkvaW5kZXhcIjtcclxuY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52W1wiUE9SVFwiXSAmJiBOdW1iZXIocHJvY2Vzcy5lbnZbXCJQT1JUXCJdKSB8fCA4MDtcclxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xyXG5cclxuaW5pdEFwaShhcHApO1xyXG5cclxuYXBwLnVzZShcIi9cIiwgZXhwcmVzcy5zdGF0aWMoYCR7X19kaXJuYW1lfS8uLi9zdGF0aWNgKSk7XHJcblxyXG5hcHAubGlzdGVuKHBvcnQsICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGBMaXN0ZW5pbmcgb24gcG9ydDogJHtwb3J0fWApO1xyXG59KTtcclxuIl19