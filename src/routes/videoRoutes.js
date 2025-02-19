import express from "express";
import upload from "../middleware/uploadMiddleware.js";
import { uploadVideo } from "../controllers/videoController.js";

const videorouter = express.Router();

videorouter.post("/uploadVideo", upload.single("video"), uploadVideo);

export default videorouter;
