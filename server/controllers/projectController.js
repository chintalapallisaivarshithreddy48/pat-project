import Project from '../models/Project.js'
import { sendError, sendSuccess } from '../utils/response.js'
import { validateRequiredString } from '../validators/common.js'

export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find({ published: true }).sort({ createdAt: -1 })
    sendSuccess(res, projects)
  } catch (error) {
    sendError(res, error.message)
  }
}

export const getProjectBySlug = async (req, res) => {
  try {
    const project = await Project.findOne({ slug: req.params.slug, published: true })
    if (!project) return sendError(res, 'Project not found', 404)
    sendSuccess(res, project)
  } catch (error) {
    sendError(res, error.message)
  }
}

export const createProject = async (req, res) => {
  try {
    validateRequiredString(req.body.title, 'title')
    validateRequiredString(req.body.slug, 'slug')
    validateRequiredString(req.body.summary, 'summary')

    const project = await Project.create(req.body)
    sendSuccess(res, project, 201)
  } catch (error) {
    sendError(res, error.message, 400)
  }
}

export const updateProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    if (!project) return sendError(res, 'Project not found', 404)
    sendSuccess(res, project)
  } catch (error) {
    sendError(res, error.message, 400)
  }
}

export const deleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id)
    if (!project) return sendError(res, 'Project not found', 404)
    sendSuccess(res, { deleted: true })
  } catch (error) {
    sendError(res, error.message, 400)
  }
}
