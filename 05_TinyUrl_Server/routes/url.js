import express from "express";
import { RedirectUrl, saveUrl } from "../controllers/URLs.js";

const router = express.Router();

router.post("/save", saveUrl);
router.get("/:shortId", RedirectUrl);

export default router;
