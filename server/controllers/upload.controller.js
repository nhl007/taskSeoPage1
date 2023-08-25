import catchAsyncErrors from '../middlewares/catchAsyncErrors.js';
import Upload from '../model/upload.js';

export const uploadFile = catchAsyncErrors(async (req, res, next) => {
  const files = req.body;

  if (!files || files.length <= 0) {
    return res.status(400).json({
      success: false,
      message: 'No files found!',
    });
  }

  try {
    files.forEach(async (file) => {
      const fileDB = await Upload.create({
        file: file.data,
        name: file.name,
        type: file.type,
      });
    });

    return res.status(200).json({
      success: true,
      message: 'File uploaded successfully!',
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      message: 'Error Ocurred!',
    });
  }
});
