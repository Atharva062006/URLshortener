import cors from "cors";
import express from "express";

import urlRouter from "./routes/urlRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("api/v1/shorten", urlRouter);

export default app;