import { errors } from "../constants.js";

const errorMessages = {
    [errors.VALIDATION_ERROR]: 'Validation Failed',
    [errors.NOT_FOUND]: 'Not Found',
    [errors.UNAUTHORIZED]: 'Unauthorized',
    [errors.FORBIDDEN]: 'Forbidden',
    [errors.SERVER_ERROR]: 'Server Error'
};

export const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode || 500;
    const errorTitle = errorMessages[statusCode] || 'Unknown Error';

    const errorResponse = {
        title: errorTitle,
        message: err.message,
        stackTrace: err.stack
    };

    res.status(statusCode).json(errorResponse);
};


