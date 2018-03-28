import { Express, Request, Response, NextFunction } from "express";
import { NotFoundError } from "../types/http-errors";
import { Gpio } from "onoff";

export namespace GpioManager {
    const GPIO_PINS = [4, 5, 6, 12, 13, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27];

    function readPin(pin: number): Promise<number> {
        if (!GPIO_PINS.includes(pin)) throw new NotFoundError();

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
    export async function read(pin?: number): Promise<number | { [pin: number]: number }> {
        if (typeof pin !== "undefined") return await readPin(pin);

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
        express.get("/api/gpio", (req, res, next) => this.getAll(req, res, next));
        express.get("/api/gpio/:pin", (req, res, next) => this.getPin(req, res, next));
    }

    private getAll(req: Request, res: Response, next: NextFunction): void {
        console.log("getAll");

        GpioManager.read()
            .then(result => {
                res.status(200).json(result);
                next();
            })
            .catch(err => next(err));
    }

    private getPin(req: Request, res: Response, next: NextFunction): void {
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
