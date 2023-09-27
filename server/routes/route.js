import express from "express";
import { getInfo } from "../contoller/data-controller.js";

const router = express.Router();

router.get("/all",getInfo);

export default router;