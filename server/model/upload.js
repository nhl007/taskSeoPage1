import mongoose from 'mongoose';

const fileSchema = mongoose.Schema({
  name: {
    type: 'string',
    required: false,
  },
  type: {
    type: String,
    required: false,
  },
  file: {
    type: String,
    required: [true, 'Please provide the file!'],
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

const Upload = mongoose.model('Upload', fileSchema);

export default Upload;
