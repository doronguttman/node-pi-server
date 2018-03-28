export interface IHttpError extends Error {
    errorCode: number;
}

export abstract class HttpErrorBase extends Error {
    public abstract readonly statusCode: number;
}

export class CustomError extends HttpErrorBase {
    constructor(statusCode: number, message: string) {
        super(message);
        this.statusCode = statusCode;
    }

    public readonly statusCode: number;
}

export class BadRequestError extends HttpErrorBase {
    constructor(message: string = "Bad request") {
        super(message);
    }

    public readonly statusCode = 400;
}

export class UnauthorizedError extends HttpErrorBase {
    constructor(message: string = "Unauthorized") {
        super(message);
    }
    
    public readonly statusCode = 401;
}

export class PaymentRequiredError extends HttpErrorBase {
    constructor(message: string = "Payment required") {
        super(message);
    }

    public readonly statusCode = 402;
}

export class ForbiddenError extends HttpErrorBase {
    constructor(message: string = "Forbidden") {
        super(message);
    }
    
    public readonly statusCode = 403;
}

export class NotFoundError extends HttpErrorBase {
    constructor(message: string = "Not found") {
        super(message);
    }

    public readonly statusCode = 404;
}

export class InternalServerError extends HttpErrorBase {
    constructor(message: string = "Internal server error") {
        super(message);
    }

    public readonly statusCode = 500;
}

export class NotImplementedError extends HttpErrorBase {
    constructor(message: string = "Not implemented") {
        super(message);
    }

    public readonly statusCode = 501;
}