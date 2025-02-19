import Article from "../models/article_model.js";
import cloudinary from "../../config/cloudinary_config.js";
import fs from "fs";

export const uploadArticle = async (req, res) => {
    try {
        if (!req.file) return res.status(400).json({ message: "No image uploaded" });

        const result = await cloudinary.uploader.upload(req.file.path, { resource_type: "image" });
        fs.unlinkSync(req.file.path); // Delete file after upload

        const body = new Article({
            title: req.body.title,
            description: req.body.description,
            image: result.secure_url,
            category: req.body.category
        });

        const article = await Article.create(body)
        res.status(201).json(article);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const getArticle = async (req, res) => {
    let limit = 16;
    let page = parseInt(req.query.page) || 1
    let skip = (page - 1) * limit
    try {
        const articles = await Article.find({}).skip(skip).limit(limit)
        res.json(articles)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getIndividualArticle = async (req, res) => {
    let id = req.params.id;
    try {
        const article = await Article.findByIdAndUpdate(id, {
            views: views + 1
        })
        res.json(article)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}