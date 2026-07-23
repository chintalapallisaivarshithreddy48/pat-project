import mongoose from 'mongoose'

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, trim: true },
    excerpt: { type: String, required: true, trim: true },
    content: { type: String, required: true, trim: true },
    imageUrl: { type: String, trim: true },
    tags: [{ type: String, trim: true }],
    published: { type: Boolean, default: true },
  },
  { timestamps: true }
)

export default mongoose.model('Blog', blogSchema)
