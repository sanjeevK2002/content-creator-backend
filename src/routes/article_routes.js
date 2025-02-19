import express from "express";
import upload from "../app/middleware/upload_middleware.js";
import { getArticle, getIndividualArticle, uploadArticle } from "../app/controllers/article_controller.js";

const articlerouter = express.Router();

articlerouter.post("/article/upload-article", upload.single("image"), uploadArticle);
articlerouter.get('/articles', getArticle);
articlerouter.get('/article/:id', getIndividualArticle)

export default articlerouter;
