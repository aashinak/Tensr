import express from "express";
import helmet from "helmet";
import cors from "cors";
import compression from "compression";
import morgan from "morgan";
import { morganStream } from "./utils/logger";
import { Request, Response } from "express";
import { EnvConfig } from "./infrastructure/config/env";

// import routes from "./routes";

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Security
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "trusted-cdn.com"],
      },
    },
  })
);

// Enable CORS with restricted origins
app.use(
  cors({
    origin: EnvConfig.CORS_ORIGIN,
    credentials: true,
  })
);

// Enable compression (gzip)
app.use(
  compression({
    filter: (req: Request, res: Response) => {
      // Don't compress authentication responses
      if (req.path.startsWith("/api/auth")) {
        return false;
      }
      return compression.filter(req, res);
    },
  })
);

// Logging
app.use(morgan("combined", { stream: morganStream }));

// Routes
app.get("/api/v1/ping", (_, res) => {
  res.send("Pong!");
});

export default app;
