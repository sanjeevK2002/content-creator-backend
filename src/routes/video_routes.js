import express from "express";
import upload from "../app/middleware/upload_middleware.js";
import { uploadVideo } from "../app/controllers/video_controller.js";

const videorouter = express.Router();

videorouter.post("/uploadVideo", upload.single("video"), uploadVideo);

export default videorouter;
