import express, { Request, Response, NextFunction } from "express";
import cloudinary from "../config/cloudinaryconfig";

export const uploadImageFile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.file) {
      const error = new Error("No file uploaded");
      return next(error); // Pass the error to the error handling middleware
      // return res.status(400).json({
      //   success: false,
      //   message: "No file uploaded",
      // });
    }

    //console.log("File :: ", req.file, req.file?.path);
    cloudinary.uploader.upload(
      `./src/imagess/${req.file.originalname}`,

      function (err: any, result: any) {
        if (err) {
          next(err);
          // console.error(err);
          // return res.status(500).json({
          //   success: false,
          //   message: "Error",
          // });
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

export const uploadVideoFile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.file) {
      const error = new Error("No file uploaded");
      return next(error); // Pass the error to the error handling middleware
      // return res.status(400).json({
      //   success: false,
      //   message: "No file uploaded",
      // });
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
          next(err);
          // console.error(err);
          // return res.status(500).json({
          //   success: false,
          //   message: "Error",
          // });
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
