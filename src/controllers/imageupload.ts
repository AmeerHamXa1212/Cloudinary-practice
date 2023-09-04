import { Request, Response } from "express";
import cloudinary from "../config/cloudinaryconfig";
import upload from "../middleware/multer";

export const uploadFile = async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }

    //console.log("File :: ", req.file, req.file?.path);
    cloudinary.uploader.upload(
      `./src/videos/${req.file.originalname}`,
      {
        resource_type: "video", // Specify that this is a video file
        folder: "videos", // Optional: Specify a folder in Cloudinary to store videos
      },
      function (err: any, result: any) {
        if (err) {
          console.error(err);
          return res.status(500).json({
            success: false,
            message: "Error",
          });
        }

        res.status(200).json({
          success: true,
          message: "Uploaded!",
          data: result,
        });
      }
    );
  } catch (error) {
    console.error(`${error}`);
    res.status(500).json({ message: "Error uploading file" });
  }
};
