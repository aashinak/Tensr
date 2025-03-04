import dotenv from "dotenv";

dotenv.config();

export const EnvConfig = {
  NODE_ENV: process.env.NODE_ENV,
  SERVICE: process.env.SERVICE,
  PORT: process.env.PORT,
  MONGODB_URL: process.env.MONGODB_URL,
  CORS_ORIGIN: process.env.CORS_ORIGIN,
  JWT_SECRET: process.env.JWT_SECRET,
};
