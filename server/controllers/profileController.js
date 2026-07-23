import Profile from '../models/Profile.js'
import { sendError, sendSuccess } from '../utils/response.js'
import { validateEmail, validateRequiredString } from '../validators/common.js'

export const getProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne().lean()
    if (!profile) return sendError(res, 'Profile not found', 404)
    sendSuccess(res, profile)
  } catch (error) {
    sendError(res, error.message)
  }
}

export const createProfile = async (req, res) => {
  try {
    validateRequiredString(req.body.name, 'name')
    validateRequiredString(req.body.role, 'role')
    validateRequiredString(req.body.intro, 'intro')
    validateEmail(req.body.email)

    const profile = await Profile.create(req.body)
    sendSuccess(res, profile, 201)
  } catch (error) {
    sendError(res, error.message, 400)
  }
}

export const updateProfile = async (req, res) => {
  try {
    const profile = await Profile.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    if (!profile) return sendError(res, 'Profile not found', 404)
    sendSuccess(res, profile)
  } catch (error) {
    sendError(res, error.message, 400)
  }
}
