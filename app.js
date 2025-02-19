import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/config/db.js";
import articlerouter from "./src/routes/article_routes.js";
import videorouter from "./src/routes/video_routes.js";

dotenv.config();
const app = express();
const port = process.env.PORT

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api", articlerouter);
app.use("/api/videos", videorouter);

app.listen(port, () => console.log("connected to port"));
