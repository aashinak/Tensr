import express from "express";
import morgan from "morgan";
const app = express();
// app.use(morgan("tiny", { stream: morganStream }));
const port = 3000;

app.listen(port, () => {
  // logger.info(`Server is running on port ${port}`);
});

