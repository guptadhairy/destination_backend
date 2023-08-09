import express from "express";
import { ContactUs } from "../controllers/contact.js";

const router = express.Router();

router.post("/contact",ContactUs);

export default router;