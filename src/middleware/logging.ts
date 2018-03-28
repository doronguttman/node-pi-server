import {Request, Response, NextFunction} from "express";
const PROD = process.env["ENVIRONMENT"] === "PROD";

class LoggingMiddleware {
    constructor() {
        console.log(LoggingMiddleware.name, `PROD: ${PROD}`);
    }

    public logRequestResponse(req: Request, res: Response, next: NextFunction) : void {
        let startTime = new Date();
        console.log(`${startTime.toISOString()} >>> ${req.method} ${req.url}`);

        res.on("finish", () => {
            let endTime = new Date();
            let duration = endTime.getTime() - startTime.getTime();
            console.log(`${endTime.toISOString()} <<< ${req.method} ${req.url}: ${res.statusCode} [${duration}msec]`);
        })
        next();
    }

    public logErrors(err: any, req: Request, res: Response, next: NextFunction) :void {
        let errorCode = err.statusCode && err.statusCode || 500;
        console.error(`${new Date().toISOString()} ERR ${req.method} ${req.url}: ${errorCode}`, err.stack && err.stack || err);
        
        let body = PROD
            ? err && err.statusCode && err.message || "Oops... something went wrong..."
            : err && (err.stack || (err.toString && err.toString()) || String(err))
        res.status(errorCode).send(body);
    }
}

export default new LoggingMiddleware();
