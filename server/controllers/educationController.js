import Education from '../models/Education.js'
import { sendError, sendSuccess } from '../utils/response.js'
import { validateRequiredString } from '../validators/common.js'

export const getEducation = async (req, res) => {
  try {
    const education = await Education.find({ published: true }).sort({ createdAt: -1 })
    sendSuccess(res, education)
  } catch (error) {
    sendError(res, error.message)
  }
}

export const createEducation = async (req, res) => {
  try {
    validateRequiredString(req.body.school, 'school')
    validateRequiredString(req.body.degree, 'degree')
    validateRequiredString(req.body.period, 'period')
    validateRequiredString(req.body.description, 'description')

    const record = await Education.create(req.body)
    sendSuccess(res, record, 201)
  } catch (error) {
    sendError(res, error.message, 400)
  }
}

export const updateEducation = async (req, res) => {
  try {
    const record = await Education.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    if (!record) return sendError(res, 'Education record not found', 404)
    sendSuccess(res, record)
  } catch (error) {
    sendError(res, error.message, 400)
  }
}

export const deleteEducation = async (req, res) => {
  try {
    const record = await Education.findByIdAndDelete(req.params.id)
    if (!record) return sendError(res, 'Education record not found', 404)
    sendSuccess(res, { deleted: true })
  } catch (error) {
    sendError(res, error.message, 400)
  }
}
