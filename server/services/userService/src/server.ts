import app from "./app";
import { EnvConfig } from "./infrastructure/config/env";
import { logger } from "./utils/logger";
import connectMongoDb from "./infrastructure/config/mongo.config";

const PORT: number = Number(process.env.PORT) || 9000;

async function startServer() {
  try {
    // Connect to databases
    await connectMongoDb();

    // Start server
    const server = app.listen(PORT, () => {
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
