import winston from "winston";
import chalk from "chalk";
import DailyRotateFile from "winston-daily-rotate-file";
import { EnvConfig } from "../config/env";

// Define log format with colors for level and message
const logFormat = winston.format.printf(({ level, message, timestamp }) => {
  const colorMap: Record<string, (msg: string) => string> = {
    info: chalk.blue,
    warn: chalk.yellow,
    error: chalk.red,
    debug: chalk.magenta,
  };

  const colorize = colorMap[level] || chalk.white;
  return `${chalk.bold(timestamp)} ${colorize(level.toUpperCase())}: ${colorize(
    message as string
  )}`;
});

// Create Winston Logger
const logger = winston.createLogger({
  level: "debug",
  format: winston.format.combine(
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    logFormat
  ),
  transports: [
    new winston.transports.Console(),
    new DailyRotateFile({
      dirname: "logs",
      filename: `${EnvConfig.SERVICE}-%DATE%.log`,
      datePattern: "YYYY-MM-DD",
      zippedArchive: false,
      maxSize: "10m",
      maxFiles: "3d",
    }),
  ],
});

// Morgan stream for request logging
const morganStream = {
  write: (message: string) => logger.info(message.trim()),
};

// Export utilities
export { logger, morganStream };
