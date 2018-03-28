import express from "express";
import { NotFoundError } from "../types/http-errors";

class StaticFilesMiddleware {
    public mount(folder: string) : express.Handler {
        console.log(this.mount.name, folder);
        const staticFiles = express.static(folder, {
            fallthrough: false
        });
        return (req, res, next) => {
            staticFiles(req, res, err => {
                if (err) return next(new NotFoundError());
                next();
            });
        }
    }
}

export default new StaticFilesMiddleware();
