import express from "express";
import upload from "../app/middleware/uploadMiddleware.js";
import { uploadVideo } from "../app/controllers/videoController.js";

const videorouter = express.Router();

videorouter.post("/uploadVideo", upload.single("video"), uploadVideo);

export default videorouter;
