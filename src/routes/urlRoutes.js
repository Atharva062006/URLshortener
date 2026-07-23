import {Router} from "express";

import {shortenUrl} from "../controllers/urlController.js";

const urlRouter = Router();

urlRouter.post("/", shortenUrl);

export default urlRouter;