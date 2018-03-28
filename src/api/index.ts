import { Express } from "express";
import { GpioController } from "./gpio-controller";

const modules: any[] = [];

export default function init(express: Express): void {
    modules.push(new GpioController(express));
}