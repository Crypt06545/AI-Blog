import mongoose, { Schema } from "mongoose";

const BlogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    authorImg: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const BlogModel = mongoose.models.blogs || mongoose.model("Blogs", BlogSchema);
export default BlogModel;
