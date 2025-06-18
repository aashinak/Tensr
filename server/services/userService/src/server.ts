import app from "./app";
import connectMongoDb from "./infrastructure/db/mongoDb/mongo.config";
import { EnvConfig } from "./shared/config/env";
import { logger } from "./shared/logger/logger";

const PORT: number = Number(process.env.PORT) || 9000;

async function startServer() {
  try {
    // Connect to databases
    await connectMongoDb();

    // Start server
    const server = app.listen(PORT, () => {
      logger.info(`Service name: ${EnvConfig.SERVICE}`);
      logger.info(`Environment: ${EnvConfig.NODE_ENV}`);
      logger.info(`🚀 Server is running on port ${PORT}`);
    });

    // Server shutdown handling
    process.on("SIGINT", async () => {
      logger.warn("Shutting down server...");

      await server.close(() => {
        logger.warn("Server closed.");
        process.exit(0);
      });
    });
  } catch (error) {
    logger.error("❌ Failed to start server:", error);
    process.exit(1);
  }
}

startServer();
