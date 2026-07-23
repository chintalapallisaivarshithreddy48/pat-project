import MediaAsset from '../models/MediaAsset.js'
import { upload } from '../services/uploadService.js'
import { sendError, sendSuccess } from '../utils/response.js'

export const uploadMedia = async (req, res) => {
  try {
    upload.single('file')(req, res, async (err) => {
      if (err) return sendError(res, err.message, 400)
      if (!req.file) return sendError(res, 'No file uploaded', 400)

      const asset = await MediaAsset.create({
        filename: req.file.filename,
        originalName: req.file.originalname,
        mimeType: req.file.mimetype,
        size: req.file.size,
        url: `/uploads/${req.file.filename}`,
        alt: req.body.alt || req.file.originalname,
      })

      sendSuccess(res, asset, 201)
    })
  } catch (error) {
    sendError(res, error.message, 400)
  }
}

export const listMedia = async (req, res) => {
  try {
    const media = await MediaAsset.find().sort({ createdAt: -1 })
    sendSuccess(res, media)
  } catch (error) {
    sendError(res, error.message)
  }
}
