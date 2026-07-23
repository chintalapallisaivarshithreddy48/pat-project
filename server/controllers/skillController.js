import Skill from '../models/Skill.js'
import { sendError, sendSuccess } from '../utils/response.js'
import { validateRequiredString } from '../validators/common.js'

export const getSkills = async (req, res) => {
  try {
    const skills = await Skill.find({ published: true }).sort({ createdAt: -1 })
    sendSuccess(res, skills)
  } catch (error) {
    sendError(res, error.message)
  }
}

export const createSkill = async (req, res) => {
  try {
    validateRequiredString(req.body.title, 'title')
    validateRequiredString(req.body.category, 'category')
    validateRequiredString(req.body.level, 'level')

    const skill = await Skill.create(req.body)
    sendSuccess(res, skill, 201)
  } catch (error) {
    sendError(res, error.message, 400)
  }
}

export const updateSkill = async (req, res) => {
  try {
    const skill = await Skill.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    if (!skill) return sendError(res, 'Skill not found', 404)
    sendSuccess(res, skill)
  } catch (error) {
    sendError(res, error.message, 400)
  }
}

export const deleteSkill = async (req, res) => {
  try {
    const skill = await Skill.findByIdAndDelete(req.params.id)
    if (!skill) return sendError(res, 'Skill not found', 404)
    sendSuccess(res, { deleted: true })
  } catch (error) {
    sendError(res, error.message, 400)
  }
}
