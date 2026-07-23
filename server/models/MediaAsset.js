import mongoose from 'mongoose'

const mediaAssetSchema = new mongoose.Schema(
  {
    filename: { type: String, required: true, trim: true },
    originalName: { type: String, required: true, trim: true },
    mimeType: { type: String, required: true, trim: true },
    size: { type: Number, required: true },
    url: { type: String, required: true, trim: true },
    alt: { type: String, trim: true },
    kind: { type: String, default: 'image' },
  },
  { timestamps: true }
)

export default mongoose.model('MediaAsset', mediaAssetSchema)
