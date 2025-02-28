import app from "./app";
import { logger } from "./utils/logger";

const PORT: number = Number(process.env.PORT) || 9000;

const server = app.listen(PORT, () => {
  logger.info(`Environment: ${process.env.NODE_ENV}`);
  logger.info(`🚀 Server is running on port ${PORT}`);
});

// Graceful shutdown handling
process.on("SIGINT", () => {
  logger.warn("Shutting down server...");
  server.close(() => {
    logger.warn("Server closed.");
    process.exit(0);
  });
});
