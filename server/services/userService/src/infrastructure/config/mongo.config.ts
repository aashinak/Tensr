import mongoose from "mongoose";
import { logger } from "../../utils/logger";
import { EnvConfig } from "./env";

async function connectMongoDb(): Promise<void> {
  try {
    logger.info("Connecting to MongoDB...");
    const connectedInstance = await mongoose.connect(
      EnvConfig.MONGODB_URL as string
    );
    logger.info(
      `MongoDB connected ::: DB HOST ::: ${connectedInstance.connection.host}`
    );
  } catch (error) {
    logger.error("Error while connecting to MongoDB ::: ", error);
    process.exit(1);
  }
}

async function disconnectMongoDb(): Promise<void> {
  try {
    await mongoose.disconnect();
    logger.warn("MongoDb connection closed");
  } catch (error) {
    logger.error("Error while disconnecting MongoDB ::: ", error);
  }
}

function shutdown(signal: string) {
  return async () => {
    logger.warn(`Received ${signal}. Closing MongoDB connection...`);
    await disconnectMongoDb();
    process.exit(0);
  };
}

process.on("SIGINT", shutdown("SIGINT"));
process.on("SIGTERM", shutdown("SIGTERM"));

export default connectMongoDb;
