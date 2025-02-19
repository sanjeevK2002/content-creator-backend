import express from "express";
import upload from "../middleware/uploadMiddleware.js";
import { uploadArticle } from "../controllers/articleController.js";

const articlerouter = express.Router();

articlerouter.post("/uploadArticle", upload.single("image"), uploadArticle);

export default articlerouter;
