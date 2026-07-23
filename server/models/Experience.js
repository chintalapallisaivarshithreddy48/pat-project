import mongoose from 'mongoose'

const experienceSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    company: { type: String, required: true, trim: true },
    period: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    highlights: [{ type: String, trim: true }],
    published: { type: Boolean, default: true },
  },
  { timestamps: true }
)

export default mongoose.model('Experience', experienceSchema)
