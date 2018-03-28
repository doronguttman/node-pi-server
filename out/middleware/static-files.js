"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_errors_1 = require("../types/http-errors");
class StaticFilesMiddleware {
    mount(folder) {
        console.log(this.mount.name, folder);
        const staticFiles = express_1.default.static(folder, {
            fallthrough: false
        });
        return (req, res, next) => {
            staticFiles(req, res, err => {
                if (err)
                    return next(new http_errors_1.NotFoundError());
                next();
            });
        };
    }
}
exports.default = new StaticFilesMiddleware();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljLWZpbGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21pZGRsZXdhcmUvc3RhdGljLWZpbGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsc0RBQThCO0FBQzlCLHNEQUFxRDtBQUVyRDtJQUNXLEtBQUssQ0FBQyxNQUFjO1FBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDckMsTUFBTSxXQUFXLEdBQUcsaUJBQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO1lBQ3ZDLFdBQVcsRUFBRSxLQUFLO1NBQ3JCLENBQUMsQ0FBQztRQUNILE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFO1lBQ3RCLFdBQVcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFO2dCQUN4QixJQUFJLEdBQUc7b0JBQUUsT0FBTyxJQUFJLENBQUMsSUFBSSwyQkFBYSxFQUFFLENBQUMsQ0FBQztnQkFDMUMsSUFBSSxFQUFFLENBQUM7WUFDWCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQTtJQUNMLENBQUM7Q0FDSjtBQUVELGtCQUFlLElBQUkscUJBQXFCLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XHJcbmltcG9ydCB7IE5vdEZvdW5kRXJyb3IgfSBmcm9tIFwiLi4vdHlwZXMvaHR0cC1lcnJvcnNcIjtcclxuXHJcbmNsYXNzIFN0YXRpY0ZpbGVzTWlkZGxld2FyZSB7XHJcbiAgICBwdWJsaWMgbW91bnQoZm9sZGVyOiBzdHJpbmcpIDogZXhwcmVzcy5IYW5kbGVyIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm1vdW50Lm5hbWUsIGZvbGRlcik7XHJcbiAgICAgICAgY29uc3Qgc3RhdGljRmlsZXMgPSBleHByZXNzLnN0YXRpYyhmb2xkZXIsIHtcclxuICAgICAgICAgICAgZmFsbHRocm91Z2g6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIChyZXEsIHJlcywgbmV4dCkgPT4ge1xyXG4gICAgICAgICAgICBzdGF0aWNGaWxlcyhyZXEsIHJlcywgZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHJldHVybiBuZXh0KG5ldyBOb3RGb3VuZEVycm9yKCkpO1xyXG4gICAgICAgICAgICAgICAgbmV4dCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBTdGF0aWNGaWxlc01pZGRsZXdhcmUoKTtcclxuIl19