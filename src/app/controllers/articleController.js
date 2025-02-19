import Article from "../models/articleModel.js";
import cloudinary from "../../config/cloudinaryConfig.js";
import fs from "fs";

export const uploadArticle = async (req, res) => {
    try {
        if (!req.file) return res.status(400).json({ message: "No image uploaded" });

        const result = await cloudinary.uploader.upload(req.file.path, { resource_type: "image" });
        fs.unlinkSync(req.file.path); // Delete file after upload

        const body = new Article({
            title: req.body.title,
            description: req.body.description,
            image_url: result.secure_url,
        });

        const article = await Article.create(body)
        res.status(201).json(article);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
