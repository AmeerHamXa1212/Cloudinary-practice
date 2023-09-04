import { Router } from "express";
import UploadRoutes from "./imageupload";

const router = Router();
router.use(UploadRoutes);
export default router;
