import express, { Request, Response, NextFunction } from "express";
import logger from "morgan";
import cors from "cors";

import { RequestError } from "./interfaces/request-error.interface";
import notesRouter from "./routes/api";

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";
const bodyParser = require("body-parser");

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.static("public"));

app.use("/api/notes", notesRouter);

app.use("*", (req, res) => {
  res.status(404).json("Route not found");
});

app.use((req: Request, res: Response): void => {
  res.status(404).json({ message: "Not found" });
});

app.use(
  (
    err: RequestError,
    req: Request,
    res: Response,
    next: NextFunction
  ): void => {
    const { status = 500, message = "Server Error" } = err;
    res.status(status).json({ message });
  }
);

export default app;
