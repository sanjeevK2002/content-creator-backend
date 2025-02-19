import multer from "multer";
import path from "path";

// Storage setup (temporary before Cloudinary upload)
const storage = multer.diskStorage({
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

// File filter (Allow only images for articles, videos for videos)
const fileFilter = (req, file, cb) => {
    const imageTypes = /jpeg|jpg|png|gif/;
    const videoTypes = /mp4|mov|avi/;
    const extname = path.extname(file.originalname).toLowerCase();

    if (req.path.includes("/uploadArticle") && imageTypes.test(extname)) {
        return cb(null, true);
    } else if (req.path.includes("/uploadVideo") && videoTypes.test(extname)) {
        return cb(null, true);
    } else {
        return cb(new Error("Invalid file type!"));
    }
};

const upload = multer({ storage, fileFilter });

export default upload;
