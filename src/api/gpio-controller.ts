import { Express, Request, Response, NextFunction } from "express";
import { Gpio } from "onoff";
import { isNumber } from "util";

namespace GpioManager {
    const GPIO_PINS = [4, 5, 6, 12, 13, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27];

    function readPin(pin: number): Promise<number> {
        if (!GPIO_PINS.includes(pin)) throw new Error("Pin number outside of range");
        
        let gpio = new Gpio(pin, "in");
        return new Promise<number>((resolve, reject) => {
            gpio.read((err, value) => {
                if (err) {
                    console.error("readPin", err);
                    reject(err);
                } else {
                    resolve(value);
                }
                gpio.unexport();
            });
        });
    }

    export async function read(pin: number): Promise<number>;
    export async function read(): Promise<{ [pin: number]: number }>
    export async function read(pin?: number ): Promise<number | { [pin: number]: number }> {
        if (pin) return await readPin(pin);

        let result: { [pin: number]: number } = {};
        for (let i = 0; i < GPIO_PINS.length; i++) {
            const pin = GPIO_PINS[i];
            result[pin] = await readPin(pin);
        }
        return result;
    }

    
}

export class GpioController {
    constructor(express: Express) {
        express.get("/api/gpio", this.getAll);
        express.get("/api/gpio/:pin", this.getPin);
    }

    private getAll(req: Request, res: Response, next: NextFunction): void {
        GpioManager.read()
            .then(result => {
                res.status(200).send(result);
            })
            .catch(err => {
                res.status(500).send(err && (err.stack || (err.toString && err.toString()) || String(err)));
            });
    }

    private getPin(req: Request, res: Response, next: NextFunction): void {
        let pin = req.param("pin");
        if (!isNumber(pin)) {
            res.status(400).send("invalid pin number");
            return;
        }

        GpioManager.read(Number(pin))
            .then(result => {
                res.status(200).send(result);
            })
            .catch(err => {
                res.status(500).send(err && (err.stack || (err.toString && err.toString()) || String(err)));
            });
    }
}
