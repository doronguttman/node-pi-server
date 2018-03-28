import { Express } from "express";
import { GpioController } from "./gpio-controller";
import { TelegramController } from "./telegram/telegram-controller";

const modules: any[] = [];

export default function init(express: Express): void {
    modules.push(new GpioController(express));
    modules.push(new TelegramController(express));
}