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
})(GpioManager || (GpioManager = {}));
class GpioController {
    constructor(express) {
        express.get("/api/gpio", this.getAll);
        express.get("/api/gpio/:pin", this.getPin);
    }
    getAll(req, res, next) {
        console.log("getAll");
        GpioManager.read()
            .then(result => {
            res.status(200).json(result);
        })
            .catch(err => next(err));
    }
    getPin(req, res, next) {
        let pin = Number(req.params["pin"]);
        console.log("getPin", pin);
        GpioManager.read(pin)
            .then(result => {
            res.status(200).json(result);
        })
            .catch(err => next(err));
    }
}
exports.GpioController = GpioController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3Bpby1jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FwaS9ncGlvLWNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLHNEQUFxRDtBQUNyRCxpQ0FBNkI7QUFFN0IsSUFBVSxXQUFXLENBa0NwQjtBQWxDRCxXQUFVLFdBQVc7SUFDakIsTUFBTSxTQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFcEYsaUJBQWlCLEdBQVc7UUFDeEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDO1lBQUUsTUFBTSxJQUFJLDJCQUFhLEVBQUUsQ0FBQztRQUV4RCxJQUFJLElBQUksR0FBRyxJQUFJLFlBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDL0IsT0FBTyxJQUFJLE9BQU8sQ0FBUyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUMzQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFO2dCQUNyQixJQUFJLEdBQUcsRUFBRTtvQkFDTCxPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQztvQkFDOUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUNmO3FCQUFNO29CQUNILE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDbEI7Z0JBQ0QsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3BCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBSUQsY0FBMkIsR0FBWTs7WUFDbkMsSUFBSSxPQUFPLEdBQUcsS0FBSyxXQUFXO2dCQUFFLE9BQU8sTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFMUQsSUFBSSxNQUFNLEdBQThCLEVBQUUsQ0FBQztZQUMzQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDdkMsTUFBTSxHQUFHLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN6QixNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDcEM7WUFDRCxPQUFPLE1BQU0sQ0FBQztRQUNsQixDQUFDO0tBQUE7SUFUcUIsZ0JBQUksT0FTekIsQ0FBQTtBQUdMLENBQUMsRUFsQ1MsV0FBVyxLQUFYLFdBQVcsUUFrQ3BCO0FBRUQ7SUFDSSxZQUFZLE9BQWdCO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRU8sTUFBTSxDQUFDLEdBQVksRUFBRSxHQUFhLEVBQUUsSUFBa0I7UUFDMUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUV0QixXQUFXLENBQUMsSUFBSSxFQUFFO2FBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ1gsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVPLE1BQU0sQ0FBQyxHQUFZLEVBQUUsR0FBYSxFQUFFLElBQWtCO1FBQzFELElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFM0IsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7YUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ1gsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDakMsQ0FBQztDQUNKO0FBMUJELHdDQTBCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV4cHJlc3MsIFJlcXVlc3QsIFJlc3BvbnNlLCBOZXh0RnVuY3Rpb24gfSBmcm9tIFwiZXhwcmVzc1wiO1xyXG5pbXBvcnQgeyBOb3RGb3VuZEVycm9yIH0gZnJvbSBcIi4uL3R5cGVzL2h0dHAtZXJyb3JzXCI7XHJcbmltcG9ydCB7IEdwaW8gfSBmcm9tIFwib25vZmZcIjtcclxuXHJcbm5hbWVzcGFjZSBHcGlvTWFuYWdlciB7XHJcbiAgICBjb25zdCBHUElPX1BJTlMgPSBbNCwgNSwgNiwgMTIsIDEzLCAxNiwgMTcsIDE4LCAxOSwgMjAsIDIxLCAyMiwgMjMsIDI0LCAyNSwgMjYsIDI3XTtcclxuXHJcbiAgICBmdW5jdGlvbiByZWFkUGluKHBpbjogbnVtYmVyKTogUHJvbWlzZTxudW1iZXI+IHtcclxuICAgICAgICBpZiAoIUdQSU9fUElOUy5pbmNsdWRlcyhwaW4pKSB0aHJvdyBuZXcgTm90Rm91bmRFcnJvcigpO1xyXG5cclxuICAgICAgICBsZXQgZ3BpbyA9IG5ldyBHcGlvKHBpbiwgXCJpblwiKTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8bnVtYmVyPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGdwaW8ucmVhZCgoZXJyLCB2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJyZWFkUGluXCIsIGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZ3Bpby51bmV4cG9ydCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVhZChwaW46IG51bWJlcik6IFByb21pc2U8bnVtYmVyPjtcclxuICAgIGV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWFkKCk6IFByb21pc2U8eyBbcGluOiBudW1iZXJdOiBudW1iZXIgfT5cclxuICAgIGV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWFkKHBpbj86IG51bWJlcik6IFByb21pc2U8bnVtYmVyIHwgeyBbcGluOiBudW1iZXJdOiBudW1iZXIgfT4ge1xyXG4gICAgICAgIGlmICh0eXBlb2YgcGluICE9PSBcInVuZGVmaW5lZFwiKSByZXR1cm4gYXdhaXQgcmVhZFBpbihwaW4pO1xyXG5cclxuICAgICAgICBsZXQgcmVzdWx0OiB7IFtwaW46IG51bWJlcl06IG51bWJlciB9ID0ge307XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBHUElPX1BJTlMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgcGluID0gR1BJT19QSU5TW2ldO1xyXG4gICAgICAgICAgICByZXN1bHRbcGluXSA9IGF3YWl0IHJlYWRQaW4ocGluKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR3Bpb0NvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IoZXhwcmVzczogRXhwcmVzcykge1xyXG4gICAgICAgIGV4cHJlc3MuZ2V0KFwiL2FwaS9ncGlvXCIsIHRoaXMuZ2V0QWxsKTtcclxuICAgICAgICBleHByZXNzLmdldChcIi9hcGkvZ3Bpby86cGluXCIsIHRoaXMuZ2V0UGluKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldEFsbChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbik6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0QWxsXCIpO1xyXG5cclxuICAgICAgICBHcGlvTWFuYWdlci5yZWFkKClcclxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gbmV4dChlcnIpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFBpbihyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbik6IHZvaWQge1xyXG4gICAgICAgIGxldCBwaW4gPSBOdW1iZXIocmVxLnBhcmFtc1tcInBpblwiXSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJnZXRQaW5cIiwgcGluKTtcclxuXHJcbiAgICAgICAgR3Bpb01hbmFnZXIucmVhZChwaW4pXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihyZXN1bHQpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IG5leHQoZXJyKSk7XHJcbiAgICB9XHJcbn1cclxuIl19