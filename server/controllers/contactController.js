import ContactMessage from '../models/ContactMessage.js'
import { sendError, sendSuccess } from '../utils/response.js'
import { validateEmail, validateRequiredString } from '../validators/common.js'

export const createContactMessage = async (req, res) => {
  try {
    validateRequiredString(req.body.name, 'name')
    validateRequiredString(req.body.message, 'message')
    validateEmail(req.body.email)

    const message = await ContactMessage.create(req.body)
    sendSuccess(res, message, 201)
  } catch (error) {
    sendError(res, error.message, 400)
  }
}

export const getContactMessages = async (req, res) => {
  try {
    const messages = await ContactMessage.find().sort({ createdAt: -1 })
    sendSuccess(res, messages)
  } catch (error) {
    sendError(res, error.message)
  }
}
