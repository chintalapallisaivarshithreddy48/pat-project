import mongoose from 'mongoose'

const profileSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    role: { type: String, required: true, trim: true },
    tagline: { type: String, trim: true },
    intro: { type: String, required: true, trim: true },
    location: { type: String, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    resumeUrl: { type: String, trim: true },
    socials: [{ label: String, href: String }],
    theme: { type: String, default: 'dark' },
    accent: { type: String, default: 'cyan' },
  },
  { timestamps: true }
)

export default mongoose.model('Profile', profileSchema)
