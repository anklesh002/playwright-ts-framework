import winston from 'winston';
import 'winston-daily-rotate-file';

const logFormat = winston.format.combine(
    // Prepend the file label to the message if available.
    winston.format((info) => {
        if (info.label) {
            info.message = `[${info.label}] ${info.message}`;
        }
        return info;
    })(),
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => {
        return `${timestamp} ${level}: ${message}`;
    })
);

const transport = new winston.transports.DailyRotateFile({
    filename: 'logs/test-%DATE%.log',
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d'
});

const logger = winston.createLogger({
    level: 'info',
    format: logFormat,
    transports: [
        transport,
        new winston.transports.Console() // Also log to console
    ]
});

export default logger;