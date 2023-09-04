// src/routes/uploadRoutes.ts
import express from "express";
import multer from "multer";
import * as uploadcontroller from "../controllers/imageupload";

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Define the route for file upload
router.post(
  "/uploadV",
  upload.single("video"),
  uploadcontroller.uploadVideoFile
);
router.post(
  "/uploadI",
  upload.single("image"),
  uploadcontroller.uploadImageFile
);

export default router;
