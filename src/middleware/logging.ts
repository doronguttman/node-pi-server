import {Request, Response, NextFunction} from "express";
const PROD = process.env["ENVIRONMENT"] === "PROD";

class LoggingMiddleware {
    constructor() {
        console.log(LoggingMiddleware.name, `PROD: ${PROD}`);
    }

    public logIncoming(req: Request, res: Response, next: NextFunction) : void {
        console.log(`${new Date().toISOString()} >>> ${req.method} ${req.url}`);
        next();
    }

    public logOutgoing(req: Request, res: Response, next: NextFunction) : void {
        console.log(`${new Date().toISOString()} <<< ${req.method} ${req.url}: ${res.statusCode}`);
        next();
    }

    public logErrors(err: any, req: Request, res: Response, next: NextFunction) :void {
        let errorCode = err.statusCode && err.statusCode || 500;
        console.error(`${new Date().toISOString()} <<< ${req.method} ${req.url}: ${errorCode}`, err.stack);
        
        let body = PROD
            ? err && err.statusCode && err.message || "Oops... something went wrong..."
            : err && (err.stack || (err.toString && err.toString()) || String(err))
        res.status(errorCode).send(body);
    }
}

export default new LoggingMiddleware();
