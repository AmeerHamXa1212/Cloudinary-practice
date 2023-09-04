// src/routes/uploadRoutes.ts
import express from "express";
import multer from "multer";
import * as uploadcontroller from "../controllers/imageupload";

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Define the route for file upload
router.post("/upload", upload.single("video"), uploadcontroller.uploadFile);

export default router;
