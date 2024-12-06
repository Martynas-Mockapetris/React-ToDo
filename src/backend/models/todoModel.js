import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const todoSchema = new Schema(
  {
    text: {
      type: String,
      required: true
    },
    completed: {
      type: Boolean,
      default: false
    },
    user_id: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

export default mongoose.model('Todo', todoSchema);
