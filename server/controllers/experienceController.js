import Experience from '../models/Experience.js'
import { sendError, sendSuccess } from '../utils/response.js'
import { validateRequiredString } from '../validators/common.js'

export const getExperiences = async (req, res) => {
  try {
    const experiences = await Experience.find({ published: true }).sort({ createdAt: -1 })
    sendSuccess(res, experiences)
  } catch (error) {
    sendError(res, error.message)
  }
}

export const createExperience = async (req, res) => {
  try {
    validateRequiredString(req.body.title, 'title')
    validateRequiredString(req.body.company, 'company')
    validateRequiredString(req.body.period, 'period')
    validateRequiredString(req.body.description, 'description')

    const experience = await Experience.create(req.body)
    sendSuccess(res, experience, 201)
  } catch (error) {
    sendError(res, error.message, 400)
  }
}

export const updateExperience = async (req, res) => {
  try {
    const experience = await Experience.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    if (!experience) return sendError(res, 'Experience not found', 404)
    sendSuccess(res, experience)
  } catch (error) {
    sendError(res, error.message, 400)
  }
}

export const deleteExperience = async (req, res) => {
  try {
    const experience = await Experience.findByIdAndDelete(req.params.id)
    if (!experience) return sendError(res, 'Experience not found', 404)
    sendSuccess(res, { deleted: true })
  } catch (error) {
    sendError(res, error.message, 400)
  }
}
