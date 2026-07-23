import mongoose from 'mongoose'

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, trim: true },
    summary: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    stack: [{ type: String, trim: true }],
    featured: { type: Boolean, default: false },
    imageUrl: { type: String, trim: true },
    imageAlt: { type: String, trim: true },
    liveUrl: { type: String, trim: true },
    githubUrl: { type: String, trim: true },
    published: { type: Boolean, default: true },
  },
  { timestamps: true }
)

export default mongoose.model('Project', projectSchema)
