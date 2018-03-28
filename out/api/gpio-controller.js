"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_errors_1 = require("../types/http-errors");
const onoff_1 = require("onoff");
var GpioManager;
(function (GpioManager) {
    const GPIO_PINS = [4, 5, 6, 12, 13, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27];
    function readPin(pin) {
        if (!GPIO_PINS.includes(pin))
            throw new http_errors_1.NotFoundError();
        let gpio = new onoff_1.Gpio(pin, "in");
        return new Promise((resolve, reject) => {
            gpio.read((err, value) => {
                if (err) {
                    console.error("readPin", err);
                    reject(err);
                }
                else {
                    resolve(value);
                }
                gpio.unexport();
            });
        });
    }
    function read(pin) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof pin !== "undefined")
                return yield readPin(pin);
            let result = {};
            for (let i = 0; i < GPIO_PINS.length; i++) {
                const pin = GPIO_PINS[i];
                result[pin] = yield readPin(pin);
            }
            return result;
        });
    }
    GpioManager.read = read;
})(GpioManager = exports.GpioManager || (exports.GpioManager = {}));
class GpioController {
    constructor(express) {
        express.get("/api/gpio", (req, res, next) => this.getAll(req, res, next));
        express.get("/api/gpio/:pin", (req, res, next) => this.getPin(req, res, next));
    }
    getAll(req, res, next) {
        console.log("getAll");
        GpioManager.read()
            .then(result => {
            res.status(200).json(result);
            next();
        })
            .catch(err => next(err));
    }
    getPin(req, res, next) {
        let pin = Number(req.params["pin"]);
        console.log("getPin", pin);
        GpioManager.read(pin)
            .then(result => {
            res.status(200).json(result);
            next();
        })
            .catch(err => next(err));
    }
}
exports.GpioController = GpioController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3Bpby1jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FwaS9ncGlvLWNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLHNEQUFxRDtBQUNyRCxpQ0FBNkI7QUFFN0IsSUFBaUIsV0FBVyxDQWtDM0I7QUFsQ0QsV0FBaUIsV0FBVztJQUN4QixNQUFNLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVwRixpQkFBaUIsR0FBVztRQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUM7WUFBRSxNQUFNLElBQUksMkJBQWEsRUFBRSxDQUFDO1FBRXhELElBQUksSUFBSSxHQUFHLElBQUksWUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMvQixPQUFPLElBQUksT0FBTyxDQUFTLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQzNDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUU7Z0JBQ3JCLElBQUksR0FBRyxFQUFFO29CQUNMLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDO29CQUM5QixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ2Y7cUJBQU07b0JBQ0gsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUNsQjtnQkFDRCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDcEIsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFJRCxjQUEyQixHQUFZOztZQUNuQyxJQUFJLE9BQU8sR0FBRyxLQUFLLFdBQVc7Z0JBQUUsT0FBTyxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUUxRCxJQUFJLE1BQU0sR0FBOEIsRUFBRSxDQUFDO1lBQzNDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUN2QyxNQUFNLEdBQUcsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pCLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNwQztZQUNELE9BQU8sTUFBTSxDQUFDO1FBQ2xCLENBQUM7S0FBQTtJQVRxQixnQkFBSSxPQVN6QixDQUFBO0FBR0wsQ0FBQyxFQWxDZ0IsV0FBVyxHQUFYLG1CQUFXLEtBQVgsbUJBQVcsUUFrQzNCO0FBRUQ7SUFDSSxZQUFZLE9BQWdCO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDbkYsQ0FBQztJQUVPLE1BQU0sQ0FBQyxHQUFZLEVBQUUsR0FBYSxFQUFFLElBQWtCO1FBQzFELE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFdEIsV0FBVyxDQUFDLElBQUksRUFBRTthQUNiLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNYLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzdCLElBQUksRUFBRSxDQUFDO1FBQ1gsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVPLE1BQU0sQ0FBQyxHQUFZLEVBQUUsR0FBYSxFQUFFLElBQWtCO1FBQzFELElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFM0IsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7YUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ1gsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDN0IsSUFBSSxFQUFFLENBQUM7UUFDWCxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNqQyxDQUFDO0NBQ0o7QUE1QkQsd0NBNEJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXhwcmVzcywgUmVxdWVzdCwgUmVzcG9uc2UsIE5leHRGdW5jdGlvbiB9IGZyb20gXCJleHByZXNzXCI7XHJcbmltcG9ydCB7IE5vdEZvdW5kRXJyb3IgfSBmcm9tIFwiLi4vdHlwZXMvaHR0cC1lcnJvcnNcIjtcclxuaW1wb3J0IHsgR3BpbyB9IGZyb20gXCJvbm9mZlwiO1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBHcGlvTWFuYWdlciB7XHJcbiAgICBjb25zdCBHUElPX1BJTlMgPSBbNCwgNSwgNiwgMTIsIDEzLCAxNiwgMTcsIDE4LCAxOSwgMjAsIDIxLCAyMiwgMjMsIDI0LCAyNSwgMjYsIDI3XTtcclxuXHJcbiAgICBmdW5jdGlvbiByZWFkUGluKHBpbjogbnVtYmVyKTogUHJvbWlzZTxudW1iZXI+IHtcclxuICAgICAgICBpZiAoIUdQSU9fUElOUy5pbmNsdWRlcyhwaW4pKSB0aHJvdyBuZXcgTm90Rm91bmRFcnJvcigpO1xyXG5cclxuICAgICAgICBsZXQgZ3BpbyA9IG5ldyBHcGlvKHBpbiwgXCJpblwiKTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8bnVtYmVyPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGdwaW8ucmVhZCgoZXJyLCB2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJyZWFkUGluXCIsIGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZ3Bpby51bmV4cG9ydCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVhZChwaW46IG51bWJlcik6IFByb21pc2U8bnVtYmVyPjtcclxuICAgIGV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWFkKCk6IFByb21pc2U8eyBbcGluOiBudW1iZXJdOiBudW1iZXIgfT5cclxuICAgIGV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWFkKHBpbj86IG51bWJlcik6IFByb21pc2U8bnVtYmVyIHwgeyBbcGluOiBudW1iZXJdOiBudW1iZXIgfT4ge1xyXG4gICAgICAgIGlmICh0eXBlb2YgcGluICE9PSBcInVuZGVmaW5lZFwiKSByZXR1cm4gYXdhaXQgcmVhZFBpbihwaW4pO1xyXG5cclxuICAgICAgICBsZXQgcmVzdWx0OiB7IFtwaW46IG51bWJlcl06IG51bWJlciB9ID0ge307XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBHUElPX1BJTlMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgcGluID0gR1BJT19QSU5TW2ldO1xyXG4gICAgICAgICAgICByZXN1bHRbcGluXSA9IGF3YWl0IHJlYWRQaW4ocGluKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR3Bpb0NvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IoZXhwcmVzczogRXhwcmVzcykge1xyXG4gICAgICAgIGV4cHJlc3MuZ2V0KFwiL2FwaS9ncGlvXCIsIChyZXEsIHJlcywgbmV4dCkgPT4gdGhpcy5nZXRBbGwocmVxLCByZXMsIG5leHQpKTtcclxuICAgICAgICBleHByZXNzLmdldChcIi9hcGkvZ3Bpby86cGluXCIsIChyZXEsIHJlcywgbmV4dCkgPT4gdGhpcy5nZXRQaW4ocmVxLCByZXMsIG5leHQpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldEFsbChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbik6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0QWxsXCIpO1xyXG5cclxuICAgICAgICBHcGlvTWFuYWdlci5yZWFkKClcclxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICBuZXh0KCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gbmV4dChlcnIpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFBpbihyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbik6IHZvaWQge1xyXG4gICAgICAgIGxldCBwaW4gPSBOdW1iZXIocmVxLnBhcmFtc1tcInBpblwiXSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJnZXRQaW5cIiwgcGluKTtcclxuXHJcbiAgICAgICAgR3Bpb01hbmFnZXIucmVhZChwaW4pXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgbmV4dCgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IG5leHQoZXJyKSk7XHJcbiAgICB9XHJcbn1cclxuIl19