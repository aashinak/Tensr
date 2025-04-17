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

export default connectMongoDb;
