const Article = require("../../../../backend/app/models/articles_model");

const search = async (req, res) => {
    const type = req.params.type;
    const data = req.query.data;
    let page = parseInt(req.query.page) || 1;
    let limit = 5;
    let skip = (page - 1) * limit
    try {
        if (type === "title") {
            const searchData = await Article.find({ title: data }).skip(skip).limit(limit)
            if (!searchData) {
                return res.status(500).json({ msg: "The data you are searching for doesn't exists" })
            }
            res.json(searchData)
        } if (type === "category") {
            const searchData = await Article.find({ category: data }).skip(skip).limit(limit)
            if (!searchData) {
                return res.status(500).json({ msg: "The data you are searching for doesn't exists" })
            }
            res.json(searchData)
        }
    } catch (err) {
        res.status(500).json(err)
    }
}

const filter = async (req, res) => {
    const type = req.params.type;
    try {
        let filteredData
        if (type === "most-viewed") {
            filteredData = await Article.find({}).sort({ views: -1 })
            res.json(filteredData)
        } if (type === "latest") {
            filteredData = await Article.find({}).sort({ createdAt: -1 })
            res.json(filteredData)
        }
    } catch (err) {
        res.status(500).json(err)
    }
}

module.exports = {
    search,
    filter
}