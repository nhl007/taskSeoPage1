import express from 'express';
import { uploadFile } from '../controllers/upload.controller.js';

const uploadRouter = express.Router();

// //!admin access only
uploadRouter.route('/upload').post(uploadFile);

export default uploadRouter;
