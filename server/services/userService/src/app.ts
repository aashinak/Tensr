import express from "express";
import helmet from "helmet";
import cors from "cors";
import compression from "compression";
import morgan from "morgan";
import { Request, Response } from "express";
import { EnvConfig } from "./shared/config/env";
import { morganStream } from "./shared/logger/logger";

// import routes from "./routes";

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Security
app.use(
  helmet({
    contentSecurityPolicy: {
      useDefaults: true,
      directives: {
        "default-src": ["'self'"],
        "script-src": ["'self'", "cdnjs.cloudflare.com"],
        "style-src": ["'self'", "fonts.googleapis.com"],
        "font-src": ["'self'", "fonts.gstatic.com"],
        "img-src": ["'self'", "data:"],
        "connect-src": ["'self'"],
        "frame-ancestors": ["'none'"],
      },
    },
    frameguard: { action: "deny" },
    referrerPolicy: { policy: "no-referrer" },
    hidePoweredBy: true,
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
      if (req.path.startsWith("/api/v1/auth")) {
        return false;
      }
      return compression.filter(req, res);
    },
  })
);

// Logging
app.use(morgan("common", { stream: morganStream }));

// Routes
app.get("/api/v1/ping", (_, res) => {
  res.json({message: "Pong!!!!"});
});

export default app;
