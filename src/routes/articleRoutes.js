import express from "express";
import upload from "../app/middleware/uploadMiddleware.js";
import { uploadArticle } from "../app/controllers/articleController.js";

const articlerouter = express.Router();

articlerouter.post("/uploadArticle", upload.single("image"), uploadArticle);

export default articlerouter;
