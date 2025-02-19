import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});


const fileFilter = (req, file, cb) => {

    const imageTypes = ["image/jpeg", "image/jpg", "image/png", "image/gif"];
    const videoTypes = ["video/mp4", "video/mov", "video/avi"];

    if (req.originalUrl.includes("/upload-article") && imageTypes.includes(file.mimetype)) {
        return cb(null, true);
    } else if (req.originalUrl.includes("/upload-video") && videoTypes.includes(file.mimetype)) {
        return cb(null, true);
    } else {
        return cb(new Error("Invalid file type!"));
    }
};


const upload = multer({ storage, fileFilter });

export default upload;
